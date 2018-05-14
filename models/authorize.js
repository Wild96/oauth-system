const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
var authSchema = new Schema ({
    UserId :{
        type:String
    },
    Username :{
        type:String
    },
    token:{
        type:String
    },
    creation_time:{
        type:Number
    },
    expiry_time:{
        type:Number
    }
});
module.exports = mongoose.model('token',authSchema);