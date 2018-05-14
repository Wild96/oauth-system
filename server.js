require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');   
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', require('./routes'));
app.listen(3000,function(){
    console.log("server is running on port",port);
});