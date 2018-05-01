const db = require("../models");

module.exports = {
  indexRender: (req, res) => {
  //go into db and fetch articles
  db.Article.find({})
    .where('saved').equals('false')
    .then(function (data) {
      let articleObj = {
        article: data
      };
      res.render("index", articleObj);
    })
    .catch(err => {
      res.json(err);
    });
  },

  fetchSavedData: (req, res) => {
  //go into db and fetch saved articles
  db.Article.find({})
    .where('saved').equals('true')
    .then(function (data) {
      let articleObj = {
        article: data
      };
      res.render("saved", articleObj);
    })
    .catch(err => {
      res.json(err);
    });
  },

  clearData: (req, res) => {
  //go into db and clear non-saved articles
  db.Article.remove()
    .where('saved').equals('false')
    .then(function (data) {
      // let articleObj = {
      //   article: data
      // };
      res.redirect("/");
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

  createCat: (req, res) => {
  let id = req.params.id;
  let note = {
    note: req.body.note
  }
  db.Category.create(note)
  .then(function(dbNote) {
    return db.Article.findOneAndUpdate({_id:id}, { $push: { note: dbNote._id } }, { new: true });
  })
  .then(function(data) {
    res.json(data);
  })
  .catch(err=> {
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

