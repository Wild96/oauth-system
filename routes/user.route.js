const express = require('express');
const router = express.Router();
const Usercontroller = require('../controllers/user.controller');
router.post('/user',Usercontroller.registeruser);

module.exports = router;