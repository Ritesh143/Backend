const {dataPath} = require('../const/dataPath');
const {readFile} = require('./dataIOService');

const authenticate = (username, password) => {
    return new Promise((resolve, reject) => {
        console.log('authenticating %s: %s', username, password);
        readFile(dataPath.USERSDATA)
            .then(users => {
                var user = users[username];
                // query the db for the given username
                if (!user) {
                    reject('User is not registered');
                    return;
                }
                if (user.password === password) {
                    resolve(user);
                }
            })
            .catch(err => reject(err));
    })
}

module.exports = authenticate;