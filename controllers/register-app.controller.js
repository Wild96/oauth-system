require('dotenv').config()
const mongoose = require('mongoose');
const regapp = require('../models/register-app');
const port = process.env.PORT;
//console.log("port:", port);
var randomstring = require("randomstring");
module.exports = {
    registerapp: async function (request, response, next) {
        try {
           
            if (port == process.env.PORT) {
                //console.log("request:", request.url);
                var ClientID = randomstring.generate();
                console.log("clientID", ClientID);
                var ClientSecret = randomstring.generate();
                console.log("client secret", ClientSecret);
                let newApp = new regapp({
                    ApplicationName: request.body.ApplicationName,
                    RedirectUrl: request.body.RedirectUrl,
                    ClientId: ClientID,
                    ClientSecret: ClientSecret
                });
                await newApp.save();
                return response.send({ ClientID: ClientID, ClientSecret: ClientSecret });
                return resposne.send(200).send({ error: false, message: "New app is successfully registered" });
            }
            else{
                console.log("Invalid access origin");
            }

        }
        catch (e) {
            return response.status(500).send({ error: true, message: e.toString() });
        }
    }
}