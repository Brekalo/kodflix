const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3001;
const db = require('./db');

db.connect().then(dbo => {
    app.get('/rest/shows/:id', (req, res) => {
        dbo.collection('shows').findOne({ id: req.params.id }, (err, doc) => {
            // collection.findOne({_id: doc_id}, function(err, document) {};
            if (err) throw err;
            res.send(doc);
            // console.log(result); -> console.log(document.name);
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