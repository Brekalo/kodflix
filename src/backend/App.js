const express = require('express')
const path = require('path');
const app = express()
const getShows = require('./shows');
const port = process.env.PORT || 3001;

app.get('/rest/shows', (req, res) => res.send(getShows()))

// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log('Example app listening on port ${port}!'))