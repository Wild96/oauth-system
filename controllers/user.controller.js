const mongoose = require('mongoose');
const user = require('../models/user');

module.exports = {
    registeruser : async function (request,response,next){
        try{
           // console.log("request:",request.body);
            //console.log("username",request.body.Username);
            //console.log("password",request.body.Password);
            let newUser = new user({Username:request.body.Username,Password:request.body.Password});
            //console.log("new user", newUser);
            await newUser.save();
            return response.status(200).send({error:false,message:"user created successfullly"});
        }
        catch(e){
            return response.status(500).send({ error:true,message:e.toString() });
        }
    }
}