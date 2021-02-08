const express = require('express');
const path = require('path');
const app = express();
const port=process.env.PORT || 3002;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))
app.get('/p1', (req, res) => res.sendFile(path.join(__dirname, '/portfolioItem.html')))
app.get('/js', (req, res) => res.sendFile(path.join(__dirname, '/js/app.js')))
app.get('/css', (req, res) => res.sendFile(path.join(__dirname, '/css/style.css')))


//this will allow to serve images//
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`now listening to http://localhost:${port}`);
})