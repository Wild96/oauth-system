const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
var regappSchema = new Schema ({
    ApplicationName : {
        type :String
    },
    RedirectUrl:{
        type:String
    },
    ClientId:{
        type:String
    },
    ClientSecret:{
        type:String
    }
});
module.exports = mongoose.model('regapp',regappSchema);