const db = require("../../models");
const jwt = require('jsonwebtoken');
const FacebookTokenStrategy = require('passport-facebook-token');
let config;
if(process.env.clientID) {
    config = process.env
} else {
    config = require("../../config/index");
}

module.exports = new FacebookTokenStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
},
async (accessToken, refreshToken, profile, done) => {
        console.log("in the passport");
    try {
        function tokenize(obj){
            const payload = {
                sub: obj._id
            };
            const token = jwt.sign(payload, config.JWT_SECRET);
            const data = obj;
            console.log("tokenize done")
            return done(null, token, data)
        }
        console.log("Profile:")
        console.log(profile);
        console.log("Access Token:")
        console.log(accessToken);
        console.log("refresh token:")
        console.log(refreshToken);
        const existingUser = await db.User.findOne({'fbId': profile.id});
        console.log("Existing User:")
        console.log(existingUser);
        if(existingUser) {
          console.log("inside existing user")
          return tokenize(existingUser);
        } 
        const newUser = {
            fbId : profile.id,
            name : profile.name.givenName,
            email : profile.emails[0].value
        };
        console.log("New user:" + newUser);

        await db.User.create(newUser);
        return tokenize(newUser);
    } 
    catch (error) {
        done(error, false, error.message)
    }
}); 