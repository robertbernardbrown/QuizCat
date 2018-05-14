const db = require("../models");
const mongoose = require("mongoose");

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
    // console.log(req)
    // console.log(req.body)
    // let cat = { category: "Any" }
    db.Category.find({})
    .update({$set: {category: req}})
    // .then(dbCat => console.log(dbCat))
    .catch(err=> res.json(err));
  },
  //keeping for now in case I need to recreate category in db
  createCat: (req, res) => {
    let cat = { category: "Any" }
    db.Category.create(cat)
    // .then(dbCat => console.log(dbCat))
    .catch(err=> res.json(err));
  },
  saveScore: (req, res) => {
    // console.log(req);
    let scoreRecord = {
      userName: req.body.userName,
      category: req.body.category,
      timeFinished: req.body.timeFinished,
    }
    console.log(scoreRecord);
    db.Score.create(scoreRecord)
    .then(function (data) {
      // console.log("Data:" + data)
      db.User.findOneAndUpdate({_id: req.body.userId}, { $push: {score:data} }, { new: true })
      .then( record => {
        // console.log("Record:" + record)
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
    console.log(data);
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
    console.log(data.userName);
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
  }
}

