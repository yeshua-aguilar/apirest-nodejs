const mongoose = require('mongoose');
const Rest = require('../models/restaurante');

const findAllRest = (req, res) => {
    Rest.find({}, (err, rest) => {
        if (err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).json({rest});
        }
    });
}

const findRestById = (req, res) => {
    Rest.findById(req.params.id, (err, rest) => {
        if (err) {
            res.status(500).send({message: err});
        } else {
            res.status(200).json({rest});
        }
    });
}

const addRest = (req, res) => {
    let rest = new Rest({
        name: req.body.name,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        boton: req.body.boton
    });

    rest.save((err, rest) => {
        err && res.status(500).send({message: err});
        res.status(200).json({rest});
    })
}

module.exports = { findAllRest, findRestById, addRest };