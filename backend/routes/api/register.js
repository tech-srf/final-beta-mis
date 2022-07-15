const express = require('express');
const router = express.Router();

// register model

const Register = require('../../models/Register')

// @routes GET api/register
// @desc GET ALL registered players
router.get('/', async(req, res) => {
    try{
        const registers = await Register.find();
        if(!registers) throw Error('No Registration');
        res.status(200).json(registers);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});

// @routes GET api/register/:id
// @desc GET a player registration
router.get('/:id', async (req, res) => {
    try{
        const register = await Register.findById(req.params.id);
        if(!register) throw Error('No Player registraion by that id found');
        res.status(200).json(register);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});


// @routes POST api/register
// @desc POST a beneficiary

router.post('/', async(req, res) => {
    const newRegister = new Register(req.body);

    try {
        const register = await newRegister.save();
        if(!register) throw Error('Something went wrong with registering a beneficary');

        res.status(200).json(register);
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});


// @routes UPDATE api/register/:id
// @desc UPDATE a beneficiary

router.patch('/:id', async(req, res) => {
    try {
        const register = await Register.findByIdAndUpdate(req.params.id, req.body);
        if(!register) throw Error('Something went wrong while updating the player registration record');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});

// @routes DELETE api/register/id
// @desc DELETE a beneficiary

router.delete('/:id', async(req, res) => {
    try {
        const register = await Register.findByIdAndDelete(req.params.id);
        if(!register) throw Error('No registration found');

        res.status(200).json({ success: true });
    }   catch(err) {
        res.status(400).json({ msg: err })
    
    }
});


module.exports = router;