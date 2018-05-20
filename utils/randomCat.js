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
    return index;
  }
   
  const changeCat = schedule.scheduleJob('2 */5 * * * *', function(){
    let randomCategory = randomCat();
    quizController.updateCategory(randomCategory);
    quizController.createQuiz(randomCategory);
  });

  module.exports = changeCat;