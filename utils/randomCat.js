const schedule = require('node-schedule');
const quizController = require("../controllers/quizController");

/**
* Sets a random category on the backend
*/
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
    function updateCategoryAndQuestions(category) {
      quizController.updateCategory(category)
      quizController.createQuiz(category);
    }
    updateCategoryAndQuestions(randomCategory);
  });

  module.exports = changeCat;