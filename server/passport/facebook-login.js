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
    try {
        function tokenize(obj){
            const payload = {
                sub: obj._id
            };
            const token = jwt.sign(payload, config.JWT_SECRET);
            const data = obj;
            return done(null, token, data)
        }
        const existingUser = await db.User.findOne({'fbId': profile.id});
        if(existingUser) {
          return tokenize(existingUser);
        } 
        const newUser = {
            fbId : profile.id,
            name : profile.name.givenName,
            email : profile.emails[0].value
        };
        await db.User.create(newUser);
        return tokenize(newUser);
    } 
    catch (error) {
        done(error, false, error.message)
    }
}); 