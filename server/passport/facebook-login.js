const db = require("../../models");
const FacebookStrategy = require('passport-facebook-token');
const config = require("../../config/index");

module.exports = new FacebookStrategy({
  clientID: config.oauth.facebook.clientID,
  clientSecret: config.oauth.facebook.clientSecret,
  callbackURL: "localhost:3000",
},
async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile);
        console.log(accessToken);
        console.log(refreshToken);
        const existingUser = await db.User.findOne({'idUser': profile.id});
        console.log("Existing user:" + existingUser);
        if(existingUser) {
          console.log("inside existing user")
          return done(null, existingUser);
        } 
        const newUser = {
            idUser : profile.id,
            userName : profile.name.givenName,
            email : profile.emails[0].value
        };
        console.log("New user:" + newUser);

        await db.User.create(newUser);
        done(null, newUser);
        } catch (error) {
        done(error, false, error.message)
      }
}); 