const mongoose = require('mongoose');

const dailyEntrySchema = new mongoose.Schema({
    profileName: {type: String, required: true},
    date: {type: Date, default: Date.now },
    hoursSlept: Number,
    carbs: Number,
    protein: Number,
    fat: Number,
    totalCalories: Number,
    water: Number,
    steps: Number,
    workout: Number,
    mood: Number
});

module.exports = mongoose.model('DailyEntry', dailyEntrySchema);