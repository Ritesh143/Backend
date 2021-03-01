var express = require('express');
var router = express.Router();
const authenticate = require('../services/authService');

/* autheticate users listing. */
router.post('/', function (req, res, next) {
    authenticate(req.body.username, req.body.password)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            console.log('errorrrrrr ', err);
            if (err === 'User is not registered') {
                res.status(404);
                res.send('User is not registered');
            } else {
                res.status(400).send(err);
            }
        });
});

module.exports = router;