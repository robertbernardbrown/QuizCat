const schedule = require('node-schedule');
const controller = require("../controllers/quizController");

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
   
  const firstChange = schedule.scheduleJob('2 14 19 * * *', function(){
    controller.updateCategory(randomCat());
  });
  const secondChange = schedule.scheduleJob('2 15 19 * * *', function(){
    controller.updateCategory(randomCat());
  });

  module.exports = {firstChange, secondChange};