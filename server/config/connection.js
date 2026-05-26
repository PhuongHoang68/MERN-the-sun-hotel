const mongoose = require('mongoose');
require("dotenv").config();

const connectionOptions = {};

// Mongoose 5.x requires these options; Mongoose 6+ ignores/rejects them
const mongooseVersion = parseInt(mongoose.version.split('.')[0], 10);
if (mongooseVersion < 6) {
  connectionOptions.useNewUrlParser = true;
  connectionOptions.useUnifiedTopology = true;
  connectionOptions.useCreateIndex = true;
  connectionOptions.useFindAndModify = false;
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/the-sun-hotel',
  connectionOptions
);

module.exports = mongoose.connection;
