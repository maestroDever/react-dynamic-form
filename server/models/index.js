const mongoose = require('mongoose');

module.exports = (url) => {
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', err => {
    console.error(`Mongoose connection error ${err}`);
    process.exit(1);
  });
  //We are connected
  require('./flight');
}
