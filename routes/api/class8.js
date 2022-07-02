const express = require('express');
const router = express.Router();

// class8 model

const Class8 = require('../../models/Class8')

// @routes GET api/class8
// @desc GET ALL Class8 visits
router.get('/', async(req, res) => {
    try{
        const class8s = await Class8.find();
        if(!class8s) throw Error('No Class 8 visit');
        res.status(200).json(class8s);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});


// @routes GET api/class8/:id
// @desc GET a class8 visit
router.get('/:id', async (req, res) => {
    try{
        const schoolsession = await SchoolSession.findById(req.params.id);
        if(!schoolsession) throw Error('No class 8 visist with thatt id found');
        res.status(200).json(schoolsession);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});

// @routes POST api/class8
// @desc POST a Class8 visit 

router.post('/', async(req, res) => {
    const newClass8 = new Class8(req.body);

    try {
        const class8 = await newClass8.save();
        if(!class8) throw Error('Something went wrong with login a Class8 visit');

        res.status(200).json(class8);
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});

// @routes UPDATE api/class8/:id
// @desc UPDATE a class8 visit

router.patch('/:id', async(req, res) => {
    try {
        const class8 = await Class8.findByIdAndUpdate(req.params.id, req.body);
        if(!class8) throw Error('Something went wrong while updating the Class 8 visit record');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});



// @routes POST api/class8/:id
// @desc POST a Class8 visit 

router.delete('/:id', async(req, res) => {
    try {
        const class8 = await Class8.findByIdAndDelete(req.params.id);
        if(!class8) throw Error('No Class8 visit found');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});

module.exports = router;