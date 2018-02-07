import { MongoClient } from 'mongodb'
import { mongoUrl, databaseName } from '../config/constants'

let db

export function connectToDb() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoUrl, (err, client) => {
      if (err) {
        return reject(err)
      }
      resolve(client)
      db = client.db(databaseName);
      return db;
    })
  })
}

export default function getDb(collection) {
  if (!db) {
    throw new Error('connect to database first')
  }
  return db.collection(collection)
}
