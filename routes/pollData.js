var express = require('express');
var router = express.Router();
var {readFile, writeFile} = require('../services/dataIOService');
const { dataPath, URL, dbName, collectionName } = require('../const/dataPath');

// get call to serve polldata
router.get('/', function(req, res, next) {
    readFile(URL, dbName.POC, collectionName.POLLDATA)
    .then((data) => {
        res.send(data);
    })
    .catch( err => res.status(400).send(err));
});

//put call to update poll data
router.put('/', function(req, res, next) {
    writeFile(dataPath.POLLDATA, req.body)
    .then((data) => {
        res.send(data);
    })
    .catch( err => res.status(400).send(err));
});


module.exports = router;
