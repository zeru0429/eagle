const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

// Login route
router.post('/api/login', loginController.loginUser);

module.exports = router;