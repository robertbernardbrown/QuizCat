const db = require("../models");
const mongoose = require("mongoose");
const request = require("request");
const dict = require("../utils/dict");

module.exports = {
  //go into db and fetch saved categories
  fetchCategory: (req, res) => {
    db.Category
      .find({})
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.json(err));
  },
  //update the category for the quiz
  updateCategory: (req, res) => {
    db.Category.find({})
    .update({$set: {category: req}})
    .catch(err=> res.json(err));
  },
  //keeping for now in case I need to recreate category in db
  createCat: (req, res) => {
    let cat = { category: "Any" }
    db.Category.create(cat)
    .catch(err=> res.json(err));
  },
  saveScore: (req, res) => {
    let scoreRecord = {
      userName: req.body.userName,
      category: req.body.category,
      timeFinished: req.body.timeFinished,
    }
    db.Score.create(scoreRecord)
    .then(function (data) {
      db.User.findOneAndUpdate({_id: req.body.userId}, { $push: {score:data} }, { new: true })
      .then( record => {
      })
    })
    .catch(err => {
      res.json(err);
    });
  },
  fetchScore: (req, res) => {
    let data = {
      category: req.params
    }
    db.Score.find(data.category ? data.category : {})
    .sort({ timeFinished: 1 })
    .limit( 10 )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  },
  fetchUserScore: (req, res) => {
    let data = {
      userName: req.params
    }
    db.Score.find(data.userName)
    .sort({ timeFinished: 1 })
    .limit( 10 )
    .populate('score')
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  },
  fetchQuiz: (req, res) => {
    db.Questions.find({})
    .then(quiz=> {
      res.json(quiz);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    })
  },
  createQuiz: (category) => {
    db.Questions.remove({}, function(){
      console.log("collection removed");
    });
    let index =  dict[category];
    request(index, (err, res, body)=> {
      if (err) console.log(err);
      let parsed = JSON.parse(body);
      db.Questions.insertMany(parsed.results)
      .catch(err=> console.log(err));
    })
  }
}

