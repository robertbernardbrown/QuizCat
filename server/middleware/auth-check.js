const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
let config;
if(process.env.JWT_SECRET) {
  config = process.env
} else {
  config = require("../../config/index");
}
/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  return jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }
      // pass user details onto next route
      req.user = user
      return next();
    });
  });
};