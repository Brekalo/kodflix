const express = require('express')
const app = express()
const getShows = require('./shows');
const port = process.env.PORT || 3001;

app.get('/rest/shows', (req, res) => res.send(getShows()))

app.listen(port, () => console.log('Example app listening on port ${port}!'))