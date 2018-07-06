const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.CUSTOM_MONGODB)

module.exports = {mongoose}