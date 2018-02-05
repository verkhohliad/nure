const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

//
// settings
//
app.set('trust proxy', true);
app.set('trust proxy', 'loopback');
app.set('port', process.env.PORT || 8082);

app.use(morgan(function (tokens, req, res) {
  return [
    new Date(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    "body: " + JSON.stringify(req.body),
  ].join(' | ')
}));


app.use('/', express.static('dist'));

app.use('/uploads', express.static('/server/uploads'));

app.use('/api/', require('./server/api'));

const server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log('Server listening on port ' + server.address().port);
});
