const express = require('express')
const Goal = require('../models/goals')
const auth = require('../middleware/auth')
const router = new express.Router()

//create a goal
router.post('/goals/create', auth, async(req, res) => {
    var numTasks = 0
    var numComplete = 0
    var endDate = req.body.endDate
    var startDate = req.body.startDate
    var percentComplete = 0

    try {
        //populate all the user's tasks from within date range of goal
        const tasks = await req.user.populate({
            path: 'tasks',
            match: { dueDate: { $lte: endDate, $gte: startDate } }
        }).execPopulate()

        //calculate number of tasks and number of complete tasks
        req.user.tasks.forEach((task) => {
            numTasks++
            if (task.completed) {
                numComplete++
            }
        })

        //get percentage of complete tasks
        //protect against division by 0
        if (numTasks === 0) {
            percentComplete = 0
        } else {
            percentComplete = numComplete / numTasks
        }

    } catch (e) {
        console.log('Error: ' + e)
    }
    var goal = new Goal({
        //spread syntax, expands the req.body object inside Goal
        ...req.body,

        //round and conver to percentage
        percentComplete: percentComplete.toFixed(2) * 100,

        //add owner id to task
        owner: req.user._id
    })
    try {
        await goal.save()
        res.status(201).send(goal)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/goals/read', auth, async(req, res) => {

    //empty object for sorting
    const sort = {}

    if (req.query.sortBy) {
        //split sortBy query into two values (will eventually be object property and value)
        const parts = req.query.sortBy.split(':')

        //parts[0] becomes the name of a property on sort{}
        //parts[1] determines the value of that property
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    const currentDate = new Date()

    try {
        await req.user.populate({
            path: 'goals',
            match: { endDate: { $gte: currentDate } },
        }).execPopulate()
        res.send(req.user.goals)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router