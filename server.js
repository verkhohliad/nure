import express from 'express';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

import { connectToDb } from "./server/db";

const app = express();

//
// settings
//
app.set('trust proxy', true);
app.set('trust proxy', 'loopback');
app.set('port', process.env.PORT || 8082);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/*
app.use(morgan(function (tokens, req, res) {
  return [
    new Date(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    "body: " + JSON.stringify(req.body),
  ].join(' | ')
}));
*/

app.use('/', express.static('dist'));

app.use('/uploads', express.static('/server/uploads'));

app.use('/api/', require('./server/api'));

const server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log('Server listening on port ' + server.address().port);
});

connectToDb().then(
  (db) => {
    console.log('connected to db successful');
  },
  (err) => {
    console.error('error: ', err);
  }
);
