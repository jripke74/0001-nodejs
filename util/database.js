const mongodb = require("mongodb");

const secrets = require("./secrets");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://jeff:${secrets.mongoDbPassword}@cluster0.delsao3.mongodb.net/shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected!!!!!!!!!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      console.log(secrets.mongoDbPassword);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
