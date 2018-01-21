import { MongoClient } from 'mongodb'
import { mongoUrl } from '../config/constants'

let db

export function connectToDb() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoUrl, (err, database) => {
      if (err) {
        return reject(err)
      }
      resolve(database)
      db = database
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
