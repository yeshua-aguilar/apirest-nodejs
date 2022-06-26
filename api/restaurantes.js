const UserController = require('../controllers/restaurantes');
const express = require('express');

const router = express.Router();

router.get('/all', UserController.findAllRest);

router.get('/:id', UserController.findRestById);

router.post('/add', UserController.addRest);

module.exports = router;