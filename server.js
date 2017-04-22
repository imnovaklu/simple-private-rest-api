var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken');

process.env.PORT = 8080;
process.env.SECRET_KEY = "novaksecret";

app.use(express.static('assets'));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use('/user', require('./controller/user'));

app.get('/access', function (req, res) {
    var token = jwt.sign({}, process.env.SECRET_KEY, {
        expiresIn: 60*60
    });
    res.json({
        token: token
    });
});

app.listen(process.env.PORT, function () {
    console.log('Server is running at http://localhost:8080');
});