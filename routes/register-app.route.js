const express = require('express');
const router = express.Router();
const RegAppController = require('../controllers/register-app.controller');
router.post('/registerapp',RegAppController.registerapp);

module.exports = router;