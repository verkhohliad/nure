import express from 'express';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

import { connectToDb } from './db';
import { error } from './utils';

const app = express();

// TODO: (1) create middlewares for check access and get headers user by token from db.
// TODO: (2) create normal crud for users
// TODO: (3) create normal endpoints for auth
// TODO: with handling good handling errors, check data before db and response message
// TODO: if haven't success.

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

app.use('/', express.static('../dist'));

app.use('/uploads', express.static('/uploads'));

app.use('/api/', require('./api/'));

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log('Server listening on port ' + server.address().port);
});

connectToDb().then(
  (db) => {
    console.log('connected to db successful');
  },
  (err) => {
    error(err);
  }
);
