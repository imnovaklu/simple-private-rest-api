var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

process.env.PORT = 8080;
process.env.SECRET_KEY = "novaksecret";

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', require('./controller/user'));
app.use('/api/access', require('./controller/token'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/404', function (req, res) {
    res.sendFile(__dirname + '/404.html');
});

app.get('*', function (req, res) {
    res.redirect('/404');
});

app.listen(process.env.PORT, function () {
    console.log('Server is running at http://localhost:8080');
});