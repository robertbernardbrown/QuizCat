const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizcatdb");
const bodyParser = require("body-parser");
const schedule = require('node-schedule');
const controller = require("./controllers/quizController");
const passport = require('passport')
const FacebookStrategy = require('passport-facebook-token');
const db = require("./models/index");
const config = require("./config/index");
let categories = [
  'Any',
  'General',
  'Books',
  'Film',
  'Music',
  'Theatre',
  'TV',
  'Video Games',
  'Board Games',
  'Nature',
  'Computers',
  'Math',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Art',
  'Celebrities',
  'Animals',
  'Vehicles',
  'Comics',
  'Gadgets',
  'Anime',
  'Cartoons',
]

randomCat = () => {
  let index =  categories[Math.floor(Math.random()*categories.length)];
  console.log(index);
  return index;
}
 
var firstTime = schedule.scheduleJob('2 29 19 * * *', function(){
  controller.updateCategory(randomCat());
});
var secondTime = schedule.scheduleJob('2 30 19 * * *', function(){
  controller.updateCategory(randomCat());
});

passport.use("facebookToken", new FacebookStrategy({
  clientID: config.oauth.facebook.clientID,
  clientSecret: config.oauth.facebook.clientSecret,
  // callbackURL: "localhost:3000",
  // profileFields: ['id', 'emails', 'displayName', 'name'] 
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
            nameUser : profile.name.givenName,
            email : profile.emails[0].value
        };
        console.log("New user:" + newUser);

        await db.User.create(newUser);
        done(null, newUser);
        } catch (error) {
        done(error, false, error.message)
      }
      //  else {
      //         //Create the user
      //         db.User.insert({
      //             idUser : profile.id,
      //             token : accessToken,
      //             nameUser : profile.displayName,
      //             email : profile.emails[0].value
      //         });

      //         //Find the user (therefore checking if it was indeed created) and return it
      //         db.User.findOne( { where : { idUser : profile.id } }).then(function (user, err) {
      //             if(user) {
      //                 return done(null, user);
      //             } else {
      //                 return done(err);
      //             }
      //         });
      //     }
      // });
})); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


