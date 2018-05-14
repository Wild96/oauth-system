const mongoose = require('mongoose');
const token = require('../models/authorize');
var moment = require('moment');

module.exports = {
    getuser: async function(request,response){
        try{
            var user_details = await token.findOne({token: request.body.token});
            var creation_time = user_details.creation_time;
            var expiry_time = user_details.expiry_time;
            var current_time = new moment().format("HHmm");
            if(current_time > expiry_time){
                console.log("token expired");
                var remove_token = await token.remove({token:request.body.token});
                console.log("token removed request a new one");
            }
            else{
                console.log("user id ",user_details.UserId);
                console.log("username",user_details.Username);
                
                return response.status(200);
            }
           
        }
        catch(e){
            return response.status(500).send({ error:true,message:e.toString() });
        }
    }
}