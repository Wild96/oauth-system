require('dotenv').config()
const mongoose = require('mongoose');
const regapp = require('../models/register-app');
const user = require('../models/user');
const authorize = require('../models/authorize');
const port = process.env.PORT;
var moment = require('moment');
//console.log("port:", port);
const url = require('url');
var randomToken = require('random-token');
module.exports = {
    authorize: async function (request, response, next) {
        try {
            if (port == process.env.PORT) {
                const client = await regapp.findOne({ ClientId: request.body.ClientId });
                var fetched_Id = client.ClientId;
              //  console.log("fetched client id:", fetched_Id);
                const userdetails = await user.findOne({ Username: request.body.Username });
                var username = userdetails.Username;
                var password = userdetails.Password;
                // console.log("username", username);
                // console.log("password:", password);
                if ((username = request.body.Username) && (password = request.body.Password)) {
                    var token = randomToken(16);
                   // console.log("token:", token);
                    var creation_time = new moment().format("HHmm");
                    //console.log("creation time",creation_time);
                    var expiry_time = new moment().add(5,"m").format("HHmm");   
                    //console.log("expiry_time:",expiry_time); 
                    const tokenmodel = new authorize({
                        Username: request.body.Username,
                        Password: request.body.Password,
                        token: token,
                        creation_time:creation_time,
                        expiry_time:expiry_time
                    });
                   await tokenmodel.save();
                    return response.redirect(url.format({
                        pathname: "http://localhost:3000/",
                        query: {
                            "token": token
                        }
                    }));
              }
                else {
                    console.log("invalid credentials");
                }
                
            }
            else {
                console.log("access restricted");
            }
        }
        catch (e) {
            return response.status(500).send({ error: true, message: e.toString() });
        }
    }
}



// token expiry calculation 
/*
creation time - current time
expiry time - token creation time + specified value  

logic to check if token has expired ......
    fetch the creation time from db and subtact it from expiry time to get specified value 
    add that specified value with creation time .
    compare this with current time and find out 
*/




 //response.redirect('');
               // return response.redirect('/')
                // return response.send({token:token});
                // return response.status(200).send({error:false,message:"token is genrerated for the user"});