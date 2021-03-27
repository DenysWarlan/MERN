const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const User = require('../models/user.models');
const router = Router()
const config = require("config");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post(
    '/register',
    [
        check('email', 'Error e-mail').isEmail(),
        check('password', 'Error password length').isLength({min: 6}),
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        console.log(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Error e-mail or password'
            })
        }
        const {email, password} = req.body;

        const newUser = await User.findOne({email})
        if (newUser) {
            return res.status(400).json({message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword});

        await user.save();

        res.status(201).json({message: 'user created'})


    } catch (e) {
        res.status(500).json({message: 'Server Error'})
    }
})
router.post(
    '/login',
    [
        check('email', 'Error e-mail').isEmail(),
        check('password', 'Error password length').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Error e-mail or password'
                })
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({message: 'User already not exists'})
            }
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: 'Error password'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtKey'),
                {expiresIn: '1h'}

            )
            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Server Error'})
        }

})

module.exports = router
