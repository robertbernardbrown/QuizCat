const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

io.on('connection', function(){ console.log("fasho") });
io.sockets.on('connection', function (socket) {
  socket.emit('message', 'You are connected!');
  socket.on('message', function (message) {
    console.log('A client is speaking to me! They’re saying: ' + message);
  }); 
});
server.listen(3002);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizcatdb");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


