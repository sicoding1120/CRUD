import mysql from "mysql";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// db.connect((err:any) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err.stack);
//     return;
//   }
//   console.log("Connected to MySQL as id", db.threadId);
// });

export default db;
