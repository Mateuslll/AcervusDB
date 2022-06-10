const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');

router.post('/createUser', userController.createUser);
router.post('/login', userController.Login);

module.exports = router;