import { MongoClient } from 'mongodb';
import { SERVER_CONFIG } from '../config/constants';
import { error } from '../utils';

let db;

export function connectToDb() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(SERVER_CONFIG.MONGO_URL, (err, client) => {
      if (err) reject(err);

      db = client.db(SERVER_CONFIG.DB_NAME);
      resolve(db);
    })
  })
}

export function getCollection(collection) {
  if (!db) {
    throw error('connect to database first')
  }
  return db.collection(collection)
}
