const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require('passport')
const config = require("./config/index");
const PORT = process.env.PORT || 3001;
const {firstChange, secondChange} = require("./utils/randomCat");
const routes = require("./routes");
const authCheckMiddleware = require("./server/middleware/auth-check");

const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || config.dbUri);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

firstChange;
secondChange;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

//load Passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use('/api', authCheckMiddleware);
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});