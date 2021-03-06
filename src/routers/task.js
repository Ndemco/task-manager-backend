const express = require('express')
const Task = require('../models/tasks')
const auth = require('../middleware/auth')
const router = new express.Router()

//create a task
router.post('/tasks', auth, async(req, res) => {
    const task = new Task({
        //spread syntax: expands the req.body object inside task
        ...req.body,
        //add owner id to task
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

//get all tasks
//GET /tasks?sortBy=createdAt:asc
router.get('/tasks', auth, async(req, res) => {

    //empty object for only showing completed or incomplete tasks
    const match = {}

    //empty object for sorting
    const sort = {}

    //if completed declared in query
    if (req.query.completed) {
        //set match.completed to the value declared
        match.completed = req.query.completed === 'true'
    }

    if (req.query.sortBy) {
        //split sortBy query into two values (will eventually be object property and value)
        const parts = req.query.sortBy.split(':')

        //parts[0] becomes the name of a property on sort{}
        //parts[1] determines the value of that property
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try {
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send()
    }
})

//get a task by id
router.get('/tasks/:id', auth, async(req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

//update a task
router.patch('/tasks/:id', auth, async(req, res) => {
    //returns array of strings of object properties
    const updates = Object.keys(req.body)

    //array of object properties the user can update
    const allowedUpdates = ['description', 'completed', 'dueDate']

    //now we want to determine if every string in updates
    // is an allowable update
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        //updates each property with newly supplied property
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()


        if (!task) {
            //no user for given ID, return 404 error
            return res.status(404).send()
        }
        // else send user
        res.send(task)
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete a task
router.delete('/tasks/:id', auth, async(req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router