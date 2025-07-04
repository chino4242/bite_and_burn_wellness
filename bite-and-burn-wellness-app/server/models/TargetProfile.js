const mongoose = require('mongoose');

const targetProfileSchema = new mongoose.Schema({
    profileName: { type: String, required: true, unique: true},
    targetCarbs: { type: Number, required: true },
    targetProtein: { type: Number, required: true},
    targetSteps: { type: Number, required: true},
    targetCalories: { type: Number, required: true},
    targetHoursSlept: {type: Number, required: true},
    targetWater: {type: Number, required: true},
    targetWorkout: {type: Number, required: true},
    targetMood: {type: Number, required: true}
});

module.exports = mongoose.model('TargetProfile', targetProfileSchema);