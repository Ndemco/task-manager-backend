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

router.get('/goals/read/all', auth, async(req, res) => {

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

    //populate goals that are not past due
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

//get a task by id
router.get('/goals/read/:id', auth, async(req, res) => {
    const _id = req.params.id

    try {
        const goal = await Goal.findOne({ _id, owner: req.user._id })

        if (!goal) {
            return res.status(404).send()
        }

        res.send(goal)
    } catch (e) {
        res.status(500).send()
    }
})

//update goal
router.patch('/goals/update/:id', auth, async(req, res) => {
    //returns array of strings of object properties
    const updates = Object.keys(req.body)

    //array of object properties the user can update
    const allowedUpdates = ['startDate', 'endDate', 'percentGoal']

    //now we want to determine if every string in updates
    // is an allowable update
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    //at this point we know every field the user wants to update is updateable
    try {
        const goal = await Goal.findOne({ _id: req.params.id, owner: req.user._id })

        //updates each property with newly supplied property
        updates.forEach((update) => goal[update] = req.body[update])
        await goal.save()


        if (!goal) {
            //no goal for given ID, return 404 error
            return res.status(404).send()
        }
        // else send updated goal
        res.send(goal)
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete goal
router.delete('/goals/delete/:id', auth, async(req, res) => {
    try {
        const goal = await Goal.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!goal) {
            return res.status(404).send()
        }

        res.send(goal)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router