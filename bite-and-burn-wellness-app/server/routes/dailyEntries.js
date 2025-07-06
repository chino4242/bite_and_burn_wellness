const express = require('express');
const router = express.Router();
const DailyEntry = require('../models/DailyEntry');
const TargetProfiles = require('../models/TargetProfile');

router.post('/', async (req, res) => {
    try {
        const dailyEntry = new DailyEntry(req.body);
        await dailyEntry.save();

        const target = await TargetProfile.findOne({ profileName: dailyEntry.profileName});
        if(!target) {
            return res.status(201).json({savedEntry: dailyEntry, evaluation: {message: 'No target profile found to compare against'}});
                
            }
        const evaluation = {
            carbDiff: dailyEntry.carbs - target.targetCarbs,
            proteinDiff: dailyEntry.protein - target.targetProtein,
            fatDiff: dailyEntry.fat - target.targetFat,
            stepsDiff: dailyEntry.steps - target.targetSteps,
            waterDiff: dailyEntry.water - target.targetWater,
            hoursSleptDiff: dailyEntry.hoursSlept - target.targetHoursSlept,
            workoutDiff: dailyEntry.workout - target.targetWorkout,
            moodDiff: dailyEntry.mood - target.targetMood
        }
        res.status(201).json({savedEntry: dailyEntry, evaluation});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.get('/:profileName', async (rew, res) => {
    try {
        const entries = await DailyEntry.find({profileName: req.params.profileName.sort({date: -1})});
        res.json(entries);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});