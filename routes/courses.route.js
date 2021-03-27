const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const Link = require('../models/link.models')
const router = Router()
const config = require("config");
const Course = require('../models/courses.model');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');
const app = require('../app');


router.post(
    '/add',
    async (req, res) => {
    try {
        const authorization = req.header('Authorization');
        const authorizationDecode = jwt.decode(authorization);
        const user = await User.findOne({_id: authorizationDecode.userId});
        if (!authorization) {
            if (!user) {
                 res.status(401).json({message: 'Authorization error'})
            }
              res.status(401).json({message: 'Authorization error'})
        }
        const course = new Course({...req.body, owner: user._id});

        await course.save();

        res.status(201).json({message: 'user created'})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Server Error'})
    }
})
router.get(
    '/list',
    async (req, res) => {
        try {
            const authorization = req.header('Authorization');
            const authorizationDecode = jwt.decode(authorization);
            const user = await User.findOne({_id: authorizationDecode.userId});
            if (!authorization) {
                if (!user) {
                    res.status(401).json({message: 'Authorization error'})
                }
                res.status(401).json({message: 'Authorization error'})
            }
            const courses = await Course.find({owner: {_id: authorizationDecode.userId}});
            res.status(200).json(courses)

        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Server Error'})
        }

})
router.get(
    '/getLinks:id',
    async (req, res) => {
        try {

        } catch (e) {
            res.status(500).json({message: 'Server Error'})
        }

})

module.exports = router
