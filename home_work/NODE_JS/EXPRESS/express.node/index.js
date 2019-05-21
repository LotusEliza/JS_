var port = 5000;
var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json());

server.use('/', express.static('public'));

server.get('/texts', (req, res) => {
    res.send(arr);
});

var arr = [];
server.post('/set_test', (req, res) => {
    arr.push(req.body);
    console.log(arr);
    res.json(req.body);
});

server.listen(port, () => {
    console.log('Server runned on port:', port);
});
