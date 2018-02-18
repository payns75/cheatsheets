import * as express from 'express';
import {Application} from 'express';
import * as fs from 'fs';
import * as https from 'https';
const bodyParser = require('body-parser');

const app: Application = express();
app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean,  defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);

// launch an HTTP Server
const httpServer = app.listen(9000, () => {
  console.log('HTTP Server running at https://localhost:' + httpServer.address().port);
});

app.get('/', function (req, res) {
  console.log('plop');
});

// app.use(express.static('public'));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// })

// app.get('/index.html', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// })

// app.listen(8080, function () {
//   console.log('App listening on port 8080!')
// })
