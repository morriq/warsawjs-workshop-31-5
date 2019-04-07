const mongoose = require('mongoose');

const { DB_HOST, DB_NAME, DB_PORT } = require('./config/db-env');


module.exports = () => {
  return mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true });
};
