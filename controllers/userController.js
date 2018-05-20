const db = require("../models");
const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../config' || process.env)

signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, JWT_SECRET);
}

module.exports = {
  //facebook Oauth token
  facebookOauth: async (req, res, next) => {
    console.log("req.user user controller", req);
    const token = signToken(req.user);
    res.status(200).json({ token });
  },
  getId: (req, res) => {
    console.log(req)
    db.User.find({})
    .where("userName").equals(req.query.name)
    .then(data => {
      res.status(200).json(data);
    })
  }
}