const express = require('express');
const router = express.Router();

// schoolsession model

const SchoolSession = require('../../models/SchoolSession')

// @routes GET api/schoolsession
// @desc GET ALL schoolsession
router.get('/', async(req, res) => {
    try{
        const schoolsessions = await SchoolSession.find();
        if(!schoolsessions) throw Error('No School session');
        res.status(200).json(schoolsessions);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});

// @routes GET api/schoolsession/:id
// @desc GET a schoolsession
router.get('/:id', async (req, res) => {
    try{
        const schoolsession = await SchoolSession.findById(req.params.id);
        if(!schoolsession) throw Error('No School session found');
        res.status(200).json(schoolsession);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});



// @routes POST api/schoolsession
// @desc POST a school session

router.post('/', async(req, res) => {
    const newSchoolSession = new SchoolSession(req.body);

    try {
        const schoolsession = await newSchoolSession.save();
        if(!schoolsession) throw Error('Something went wrong with recording a session');

        res.status(200).json(schoolsession);
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});


// @routes UPDATE api/schoolsession/:id
// @desc UPDATE a school session

router.patch('/:id', async(req, res) => {
    try {
        const schoolsession = await SchoolSession.findByIdAndUpdate(req.params.id, req.body);
        if(!schoolsession) throw Error('Something went wrong while updating the school session record');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});

// @routes DELETE api/schoolsession/:id
// @desc DELETE a school session

router.delete('/:id', async(req, res) => {
    try {
        const schoolsession = await SchoolSession.findByIdAndDelete(req.params.id);
        if(!schoolsession) throw Error('No school session found');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});

module.exports = router;