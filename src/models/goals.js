const mongoose = require('mongoose')
const validator = require('validator')

const goalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    percentGoal: {
        type: Number,
        required: true
    },
    percentComplete: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    }
}, {
    timestamps: true
})

goalSchema.virtual('tasks', {
    ref: 'Tasks',
    localField: '_id',
    foreignField: 'owner'
})

goalSchema.pre('/goals/read', async function(next) {
    const goal = this

    try {
        //populate all the user's tasks from within date range of goal
        const tasks = await req.user.populate({
            path: 'tasks',
            //filter by due date of task <= endDate of goal && >= startDate of goal
            match: { dueDate: { $lte: endDate, $gte: startDate } }
        }).execPopulate()

        //calculate total number of tasks and number of complete tasks
        req.user.tasks.forEach((task) => {
            numTasks++
            if (task.completed) {
                numComplete++
            }
        })

        //get percentage of complete tasks
        percentComplete = numComplete / numTasks
        goal.percentComplete = percentComplete.toFixed(2) * 100
    } catch (e) {
        console.log('Error: ' + e)
    }

    await goal.save()
})

const Goal = mongoose.model('Goals', goalSchema)

module.exports = Goal