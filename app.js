const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const request = require('request');
const https = require('https');
const { response } = require('express');

app.use(express.static('public'));

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html')
})



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});