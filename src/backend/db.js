const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Set up server connection
const db = {
    host: 'localhost',
    port: '27017',
    name: 'kodflix',
    user: 'kodflix',
    pwd: 'kodflix'
};
// Connection url
const url = `mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.name}`;

module.exports = { connect };

function connect() {
    return new Promise((resolve, reject) => {
        // Connect using MongoClient
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log('Connected successfully to server');
            // Select the database by name
            const dbo = client.db(db.name);
            resolve(dbo);
        });
    });
} 