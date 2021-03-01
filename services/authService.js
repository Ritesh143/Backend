var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const authenticate = (username, password) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) reject(err);
            var dbo = db.db("poc");
            var query = { "username": username, "password": password };
            dbo.collection("users").findOne(query, function (err, res) {
                db.close();
                if (err) {
                    reject(err);
                    return;
                }
                if (res) {
                    resolve(res);
                    return;
                }
                resolve("User is not registered");
            });
        })
    })
}

module.exports = authenticate;