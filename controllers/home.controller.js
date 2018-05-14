const mongoose = require('mongoose');
const token = require('../models/authorize');
var moment = require('moment');

module.exports = {
    getuser: async function(request,response){
        try{
            //console.log("request.body",request.body.token);
            //check if token has expired then give message sayin that it has expired in the  console.
            var user_details = await token.findOne({token: request.body.token});
         //   console.log("user details:",user_details);
            var creation_time = user_details.creation_time;
          //  console.log("creation time",creation_time);
            var expiry_time = user_details.expiry_time;
            var current_time = new moment().format("HHmm");
          //  console.log("current time:",current_time);
            if(current_time > expiry_time){
                console.log("token expired");
                var remove_token = await token.remove({token:request.body.token});
                console.log("token removed request a new one");
            
            }
            console.log("username",user_details.Username);
            console.log("password:",user_details.Password);
            return response.status(200);
        }
        catch(e){
            return response.status(500).send({ error:true,message:e.toString() });
        }
    }
}