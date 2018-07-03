const db = require('./db')

module.exports.handleSignup = (email, password) => {
  // Check if email exists
  db.saveUser({email, password})
  // send welcome email
}