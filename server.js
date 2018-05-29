const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require('passport')
const PORT = process.env.PORT || 3001;
const changeCat = require("./utils/randomCat");
const routes = require("./routes");
const authCheckMiddleware = require("./server/middleware/auth-check");
const FacebookTokenStrategy = require('passport-facebook-token');
let config;
if(process.env.MONGODB_URI) {
  config = process.env
} else {
  config = require("./config/index");
}

const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || config.dbUri);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

changeCat;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

//load Passport strategies
const facebookTokenLoginStrategy = require("./server/passport/facebook-login");
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('facebook-token', facebookTokenLoginStrategy);
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use('/api', authCheckMiddleware);
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const server = app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

let user = {
  userCount: 0,
  activeUsers: 0
}
const io = require("socket.io").listen(server);
io.on('connection', (socket) => { 
  // console.log("socket server listening")
  // console.log(`User connected: ${socket.id}`);
  user.userCount++;
  socket.emit("broadcast", user);

  socket.on("disconnect", () => {
    // console.log(`User disconnected: ${socket.id}`);
    user.userCount--;
    user.activeUsers--;
    socket.emit("broadcast", user);
  });

  socket.on("deactivateUser", () => {
    user.activeUsers--
    socket.emit("broadcast", user);
  });

  socket.on("activateUser", () => {
    user.activeUsers = user.userCount
    socket.emit("broadcast", user);
  });

  setInterval(() => socket.emit("broadcast", user),1000);

  socket.on("error", err => {
    console.log(`Received error from user: ${socket.id}`);
    console.log(err);
  });

  socket.on('connect_failed', err => {
    console.log(err)
    console.log("connect failed")
  });
});