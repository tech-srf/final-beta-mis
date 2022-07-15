const express = require('express');
const router = express.Router();

// clinicsession model

const ClinicSession = require('../../models/ClinicSession')

// @routes GET api/clinicsession
// @desc GET ALL  clinic session
router.get('/', async(req, res) => {
    try{
        const clinicsession = await ClinicSession.find();
        if(!clinicsession) throw Error('No Clinic Session');
        res.status(200).json(clinicsession);
    } catch(err){
        res.status(400).json({ msg: err})
    }
    });

// @routes GET api/clinicsession/:id
// @desc GET a clinicsession
router.get('/:id', async (req, res) => {
    try{
        const clinicsession = await ClinicSession.findById(req.params.id);
        if(!clinicsession) throw Error('No clinic session of this id found');
        res.status(200).json(clinicsession);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});

// @routes POST api/clinicsession
// @desc POST a clinic session

router.post('/', async(req, res) => {
    const newClinicSession = new ClinicSession(req.body);

    try {
        const clinicsession = await newClinicSession.save();
        if(!clinicsession) throw Error('Something went wrong with recording a session');

        res.status(200).json(clinicsession);
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});

// @routes UPDATE api/clinicsession/:id
// @desc UPDATE a clinic session

router.patch('/:id', async(req, res) => {
    try {
        const clinicsession = await ClinicSession.findByIdAndUpdate(req.params.id, req.body);
        if(!clinicsession) throw Error('Something went wrong while updating the clinic session record');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});

// @routes DELETE api/clinicsession/:id
// @desc DELETE a clinic session

router.delete('/:id', async(req, res) => {
    try {
        const clinicsession = await ClinicSession.findByIdAndDelete(req.params.id);
        if(!clinicsession) throw Error('No Clinic session found');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});

module.exports = router;