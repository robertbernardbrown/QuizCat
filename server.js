const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schedule = require('node-schedule');
const controller = require("./controllers/quizController");
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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizcatdb");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


