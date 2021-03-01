const fs = require('fs');

// reads a file from the db
const readFile = (filePath, returnJson = true, encoding = 'utf8') => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                console.log('Error reading file %s', err);
                reject(err.message);
                return;
            }
            console.log('successful reading file');
            resolve(returnJson ? JSON.parse(data) : data);
        });
    });
}

// writes a file intp the db
const writeFile = (filePath, fileData, encoding = 'utf8') => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(fileData), encoding, (err) => {
            if (err) {
                console.log('Error writing file %s', err);
                reject(err.message);
                return;
            }
            resolve({'Success': "Record Successfully updated"});
        });
    });
};

module.exports = {readFile, writeFile};