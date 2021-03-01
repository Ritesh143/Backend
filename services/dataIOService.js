var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

// reads a file from the db
const readFile = (url, dbName, collectionName) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) reject(err);
            var dbo = db.db(dbName);
            dbo.collection(collectionName).findOne({},function (err, res) {
                console.log(res , " adnsdmcm;lkcx");
                console.log(err);
                db.close();
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            });
        });
    });
};

// writes a file intp the db
const writeFile = (url, dbName, collectionName, fileData) => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (err, db) {
                if (err) reject(err);
                var dbo = db.db(dbName);
                if(!(fileData._id == null || fileData._id == '')){
                    console.log(fileData);
                    var newvalues = { $set: {"options" : fileData.options}};
                    dbo.collection(collectionName).updateOne({ "_id": new ObjectId(fileData._id) }, newvalues, function (err, res) {
                        db.close();
                        console.log("1 document updated");
                        if (err) {
                            reject(err);
                            return;
                        }
                        if (res) {
                            resolve({ 'Success': "Record Successfully updated" });
                            return;
                        }
                    });
                } else {
                    dbo.collection(collectionName).insertOne(fileData, function(err, res) {
                        if (err) throw reject(err);
                        console.log("1 document inserted");
                        resolve({ 'Success': "Record Successfully updated" });
                        db.close();
                      });
                }
            });
        });
    };

    module.exports = { readFile, writeFile };