const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3001;
const db = require('./db');

db.connect().then(dbo => {

    app.get('/rest/shows', (req, res) => {
        dbo.collection('shows').find({}).toArray((err, results) => {
            if (err) throw err;
            //console.log(result);
            res.send(results);
        });
    });
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });

    app.listen(port, () => console.log(`Server is listening to Port ${port}`));
});