const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/oauth')
  .then(() =>  console.log('succesfully connected to oauth database'))
  .catch((err) => console.error(err));