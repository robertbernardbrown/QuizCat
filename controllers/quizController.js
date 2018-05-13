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
      userName: [req.body.userId],
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
    console.log(data.category);
    db.Score.find(data.category ? data.category : {})
    .sort({ timeFinished: 1 })
    .limit( 10 )
    .populate('userName', 'name')
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
  },

  saveArticle: (req, res) => {
  //go into db and clear non-saved articles
  let id = req.params.id;
  let query = { _id: id };
  db.Article.findByIdAndUpdate(id, { saved: true })
  .then(function(data){
    console.log(data);
  })
  .catch(err=>{
    res.json(err);
  })
  res.redirect("/");
  },

  unsaveArticle: (req, res) => {
  //go into db and clear non-saved articles
  let id = req.params.id;
  console.log(id);
  let query = { _id: id };
  db.Article.findByIdAndUpdate(id, { saved: false })
  .then(function(data){
    console.log(data);
    res.redirect("saved");
  })
  .catch(err=>{
    res.json(err);
  })
  },

  fetchData: (req, res) => {
  var url = "https://hackernoon.com/tagged/software-development";
    request(url, (error, response, html)=>{
      if (error) throw error;
      var $ = cheerio.load(html);
        $(".postArticle").each(function (i, element) {
          let item = {
            author: $(element).find("[data-user-id]").text(),
            title: $(element).find(".graf--title").text(),
            image: $(element).find("div.aspectRatioPlaceholder").children().next().attr("src"),
            published: $(element).find("time").text(),
            url: $(element).find(".postArticle-content").parent().attr("href")
          }
          db.Article.create(item)
          .then(function(){
            res.redirect("/");
          })
          .catch(err=>{
            console.log(err);
            res.redirect("/");
          });
        })
    });
  },

  clearSaved: (req, res) => {
  db.Note.remove({});
  db.Article.remove()
  .where('saved').equals('true')
  .then(function (data) {
    res.render("saved");
  })
  .catch(err => {
    res.json(err);
  });
  },

  articleNotesGet: (req, res) =>{
  let id = req.params.id;
  db.Article.findById({_id:id})
  .populate("note")
  .then(data=>{
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
  },
  noteDelete: (req, res)=>{
  let id = req.params.id;
  db.Note.findByIdAndRemove(id)
  .then(function(deleted) {
    res.redirect("saved");
  })
  .catch(err=> {
    res.json(err);
  });
  }
}

