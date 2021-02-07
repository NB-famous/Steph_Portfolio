const express = require('express');
const path = require('path');
const app = express();
const port=3002;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))
app.get('/css', (req, res) => res.sendFile(path.join(__dirname, '/css/style.css')))

//this will allow to serve images//
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`now listening to http://localhost:${port}`);
})