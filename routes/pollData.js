var express = require('express');
var router = express.Router();
const {dataPath} = require('../const/dataPath');
var {readFile, writeFile} = require('../services/dataIOService');

// get call to serve polldata
router.get('/', function(req, res, next) {
    readFile(dataPath.POLLDATA)
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
