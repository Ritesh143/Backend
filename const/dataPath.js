const dataPath = {
    POLLDATA: './data/pollData.json',
    USERSDATA: './data/usersData.json'
}
const URL = "mongodb://localhost:27017/";
const dbName = {
    POC: 'poc'
}
const collectionName = {
    USERS: 'users',
    POLLDATA: 'pollData'
}

module.exports = {dataPath, URL, dbName, collectionName};