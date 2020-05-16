const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number,
            trim: true,
            required: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;