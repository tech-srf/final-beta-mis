const express = require('express');
const router = express.Router();

// counseling model

const Counseling = require('../../models/Counseling')

// @routes GET api/counseling
// @desc GET all counseling session
router.get('/', async(req, res) => {
    try{
        const counselings = await Counseling.find();
        if(!counselings) throw Error('No Counseling Session');
        res.status(200).json(counselings);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});


// @routes GET api/counseling/:id
// @desc GET a counseling session
router.get('/:id', async (req, res) => {
    try{
        const counseling = await Counseling.findById(req.params.id);
        if(!counseling) throw Error('No Counseling session by that id found');
        res.status(200).json(counseling);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});


// @routes POST api/counseling
// @desc POST a counseling session

router.post('/', async(req, res) => {
    const newCounseling = new Counseling(req.body);

    try {
        const counseling = await newCounseling.save();
        if(!counseling) throw Error('Something went wrong with recording a couseling session');

        res.status(200).json(counseling);
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});

// @routes UPDATE api/counseling/:id
// @desc UPDATE a counseling session

router.patch('/:id', async(req, res) => {
    try {
        const counseling = await Counseling.findByIdAndUpdate(req.params.id, req.body);
        if(!counseling) throw Error('Something went wrong while updating the counseling record');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});

// @routes DELETE api/counseling/:id
// @desc DELETE a counseling session

router.delete('/:id', async(req, res) => {
    try {
        const counseling = await Counseling.findByIdAndDelete(req.params.id);
        if(!counseling) throw Error('No Counseling session found');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});

module.exports = router;