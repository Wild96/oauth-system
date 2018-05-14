
const express = require('express');
const router  = express.Router();
const path = require('path');
router.get('/',function(req,res){
    res.send("home route");
});
router.post('/',require('./home.route.js'))
router.post('/user', require('./user.route'));
router.post('/registerapp',require('./register-app.route'))
router.get('/authenticate',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});
router.post('/authenticate',(req, res, next) => {
    return next();
}, require('./authorize.route'));
module.exports = router;