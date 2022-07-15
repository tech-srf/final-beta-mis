const express = require('express');
const router = express.Router();

// signup model

const SignUp = require('../../models/SignUp')

// @routes GET api/signup
// @desc GET ALL players
router.get('/', async (req, res) => {
try{
    const signups = await SignUp.find();
    if(!signups) throw Error('No Players');
    res.status(200).json(signups);
} catch(err){
    res.status(400).json({ msg: err})
}
});


// @routes GET api/signup/:id
// @desc GET a player
router.get('/:id', async (req, res) => {
    try{
        const signup = await SignUp.findById(req.params.id);
        if(!signup) throw Error('No Player of that id found');
        res.status(200).json(signup);
    } catch(err){
        res.status(400).json({ msg: err})
    }
});


// @routes POST api/signup
// @desc POST a player

router.post('/', async(req, res) => {
    const newSignUp = new SignUp(req.body);

    try {
        const signup = await newSignUp.save();
        if(!signup) throw Error('Something went wrong with the sign up');

        res.status(200).json(signup);
    }   catch(err) {
        res.status(400).json({msg: err})
    
    }
});

// @routes UPDATE api/signup/:id
// @desc UPDATE a signup

router.patch('/:id', async (req,res) => {
    try{
        const signup = await SignUp.findByIdAndUpdate(req.params.id, req.body);
        if(!signup)throw Error('Something went wrong while updating the signup record');

        res.status(200).json({ success: true})
    }   catch(err) {
        res.status(400).json({ msg: err })
    }
});


// @routes DELETE api/signup/:id
// @desc DELETE a signup

router.delete('/:id', async (req,res) => {
    try{
        const signup = await SignUp.findByIdAndDelete(req.params.id);
        if(!signup)throw Error('No signup found');

        res.status(200).json({ success: true})
    }   catch(err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;