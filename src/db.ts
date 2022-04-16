const MONGODB_PORT = process.env.MONGODB_PORT;
const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;

const mongoose = require('mongoose');

const DB_URI: string = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@db:${MONGODB_PORT}`

module.exports = () => {
  const connect = () => {
    mongoose.connect(DB_URI, function(err: Error) {
      if (err) {
        console.error('mongodb connection error', err);
      } else {
        console.log('mongodb connected');
      }
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./models/articles');
};
