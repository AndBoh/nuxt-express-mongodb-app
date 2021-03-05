const mongoose = require('mongoose');

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

class MongoDBDriver {
  static async connect(user, password, dbName) {
    const connectionURI = `mongodb://${user}:${password}@db/${dbName}`;
    mongoose.connect(connectionURI, connectionOptions);
    console.log('MongoDB connected.');
    return mongoose;
  }
}

module.exports = MongoDBDriver;