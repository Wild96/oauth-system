const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
var userSchema = new Schema ({
    Username : {
        type :String
    },
    Password:{
        type:String
    }
});
module.exports = mongoose.model('user',userSchema);