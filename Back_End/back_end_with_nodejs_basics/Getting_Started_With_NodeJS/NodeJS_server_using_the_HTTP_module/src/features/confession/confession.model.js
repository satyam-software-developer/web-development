// export default class ConfessionModel {
//   constructor(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//   }

//   static async create(title, body, author) {
//     try {
//       // 1. Get the database
//       // 2. Get the collection
//       // 3. Insert the document
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   }
// }

import { getDB } from "../../config/mongodb.js";

export default class ConfessionModel {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
  }

  static async create(title, body, author) {
    try {
      // 1. Get the database
      const db = getDB();
      // 2. Get the collection
      const collection = db.collection("confessions");
      // 3. Insert the document
      const result = await collection.insertOne({ title, body, author });
      return result.ops[0];
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
