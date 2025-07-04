const express = require('express');
const router = express.Router();
const TargetProfile = require('../models/TargetProfile');

router.post('/', async (req, res) => {
    try {
        const newTarget = new TargetProfile(req.body);
        const savedTarget = await newTarget.save();
        res.status(201).json(savedTarget);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.get('/:profileName', async (req, res) => {
    try {
        const target = await TargetProfile.findOne({profileName: req.params.profileName});
        if (!target) {
            return res.status(404).json({message: 'Target Profile not found.'});
            
        }
        res.json(target);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    
});

module.exports = router;