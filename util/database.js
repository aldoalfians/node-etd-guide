const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://aldo:boetdboetd908@cluster0.wl7hq.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
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

// Connect database mysql using sequelize
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", null, {
//   host: "localhost",
//   dialect: "mysql",
// });

// module.exports = sequelize;

// connected to database not use sequelize
// const mqsql = require("mysql2");

// const pool = mqsql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
// });

// module.exports = pool.promise();
