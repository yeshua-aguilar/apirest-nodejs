const mongoose = require('mongoose');
const User = require('../models/user');

const findAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).json({users});
        }
    });
}

const findUserById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).json({user});
        }
    });
}

const addUser = (req, res) => {
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    user.save((err, user) => {
        err && res.status(500).send({message: err});
        res.status(200).json({user});
    })
}

module.exports = { findAllUsers, findUserById, addUser };