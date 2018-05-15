const schedule = require('node-schedule');
const quizController = require("../controllers/quizController");

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
   
  const changeCat = schedule.scheduleJob('1 0 * * * *', function(){
    let randomCategory = randomCat();
    quizController.updateCategory(randomCategory);
    quizController.getQuiz(randomCategory);
  });

  module.exports = changeCat;