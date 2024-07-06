//?first import packages
//config packages
//?express config, cors config, dotenv config, pg config
//connection string -> store in the .env, get from Supabase connection section
//?set up pool
//endpoint for root route
//set up server port

//endpoints
//?GET endpoint --> need to SELECT data from database
// POST endpoint -> recieve the body from client and we INSERT the body into dB

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const DbString = process.env.db_url;

export const db = new pg.Pool({
  connectionString: DbString,
});

const PORT = 7878;
app.listen(PORT, () => {
  console.log(`Your server is running on port: ${PORT}`);
});

app.get(
  "/getposts",
  async (
    req,
    res //biscuits name and bio pls
  ) => {
    const result = await db.query(
      `SELECT * FROM posts JOIN categories ON posts.category_id = categories.id `
    );

    res.json(result.rows);
  }
);

//? for catergory filtering?
app.get(
  `/category/:category`, //!will this be name, or a number when routing? if useing name join as bellow
  async (
    //?function like a part of the params that we can call below with the same name in params.:WORDCHOSEN
    req,
    res //posts in cat pls
  ) => {
    const nameForCategory = req.params.category;
    const result = await db.query(
      `SELECT
        post_text, username, likes
      FROM posts
      JOIN categories ON posts.category_id = categories.id
      WHERE categories.category_name = ${nameForCategory} `
    );
    //! need to join to find catergory id #?
    res.json(result.rows);
    console.log(res); ///? maybe needs to become a const?
  }
);

app.post("/posts", async (req, res) => {
  const { username, post_text, category_id } = req.body; //!might not need form
  try {
    await db.query(
      `INSERT INTO posts (username, post_text, category_id) VALUES ($1,$2,$3)`,
      [username, post_text, category_id] //!might just need catergry here, not catergory_id
    );
  } catch (error) {
    console.error("No data is getting inserted", error);
    res.status(500).json({ success: false });
  }
});

//!Stretch goals, endpoints for UPDATE and DELETE

app.put("/pathForUpdate/:id", async (req, res) => {
  const dataIdForUpdate = req.params.id; //--> this request endpoint param in url
  try {
    const result = await db.query(
      `UPDATE table SET (column_name =) $1, second_column = $2 WHERE id = ${dataIdForUpdate}  RETURNING *`,
      [arguement, argument2]
    );
  } catch (error) {
    console.error("Update incomplete", error);
    res.status(500).json({ success: false });
  }
  //! , include dataIdForUpdat if not using variable in sql query

  res.json(result.rows); //! likely would use here, but if works may be a way to check data
});

app.delete("/deleteFormData/:id", async (req, res) => {
  const dataIdForDelete = req.params.id;
  try {
    const result = await db.query(
      `DELETE FROM table_name WHERE id = ($1) RETURNING * `,
      [dataIdForDelete]
    );
  } catch (error) {
    console.error("Unable to delete", error);
    res.status(500).json({ success: false });
  }
  res.json(result.rows);
});

//? how would we use this to take username and a password to delete a posting
// `SELECT
// post_text, username, likes
// FROM posts
// JOIN categories ON posts.category_id = categories.id
// WHERE categories.category_name = ${nameForCategory}; `
// );

//? like this?
// `DELETE
// *
// FROM posts
// JOIN categories ON posts.category_id = categories.id
// WHERE username = ${username}  AND pw=${password} AND id =${id};` <---//!pull from params
// );

//? else run a username password check on the page and only run query with id if data matches
