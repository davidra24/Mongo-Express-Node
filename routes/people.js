const express = require('express');
const Person = require('../models/person');
const router = express.Router();
const peopleController = require('../controllers/people');

router.get('/', peopleController.findPeople);

router.get('/:id', peopleController.findPeople);

router.post('/', peopleController.createPerson);

module.exports = router;
