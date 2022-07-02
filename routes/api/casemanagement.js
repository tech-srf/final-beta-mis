const express = require('express');
const router = express.Router();

// casemanagement model

const CaseManagement = require('../../models/CaseManagement')
// @routes GET api/casemanagement
// @desc GET ALL casemanagement visits

router.get('/', async(req, res) => {
    try{
        const casemanagements = await CaseManagement.find();
        if(!casemanagements) throw Error('No CaseManagement visit');
        res.status(200).json(casemanagements);
    } catch(err){
        res.status(400).json({ msg: err})
    }
    });

// @routes GET api/casemanagement/:id
// @desc GET a casemanagement
router.get('/:id', async (req, res) => {
    try{
        const casemanagement = await CaseManagement.findById(req.params.id);
        if(!casemanagement) throw Error('No Case Management of that id found');
        res.status(200).json(casemanagement);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});

// @routes POST api/casemanagement
// @desc POST a Case Management visit 

router.post('/', async(req, res) => {
    const newCaseManagement = new CaseManagement(req.body);

    try {
        const casemanagement = await newCaseManagement.save();
        if(!casemanagement8) throw Error('Something went wrong with login a CaseManagement visit');

        res.status(200).json(casemanagement);
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});

// @routes UPDATE api/casemanagement/:id
// @desc UPDATE a casemanagement visit

router.patch('/:id', async(req, res) => {
    try {
        const casemanagement = await CaseManagement.findByIdAndUpdate(req.params.id, req.body);
        if(!casemanagement) throw Error('Something went wrong while updating the Case Management record');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});


// @routes DELETE api/casemanagement/:id
// @desc DELETE a Case Management visit 

router.delete('/:id', async (req,res) => {
    try{ const casemanagement = await CaseManagement.findByIdAndDelete(req.params.id);
        if(!casemanagement)throw Error('No casemanagement found')

        res.status(200).json({ success: true})
    }   catch(err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;