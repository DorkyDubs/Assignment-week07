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
  "/posts",
  async (
    req,
    res //biscuits name and bio pls
  ) => {
    const result = await db.query(`SELECT post_text FROM posts`);

    res.json(result.rows);
  }
);

//? for catergory filtering?
app.get(
  `/posts/${category}`,
  async (
    req,
    res //posts in cat pls
  ) => {
    const result = await db.query(
      `SELECT post_text FROM posts WHERE category_id = `
    );
    //! need to join to find catergory id #?
    res.json(result.rows);
  }
);

app.post("/posts", async (req, res) => {
  const { username, post_text, catergory_id } = request.body.form; //!might not need form
  try {
    await db.query(
      `INSERT INTO posts (username, post_text, category_id) VALUES ($1,$2,$3)`,
      [username, post_text, category_id] //!might just need catergry here, not catergory_id
    );
  } catch (error) {
    console.error("No data is getting inserted", error);
    response.status(500).json({ success: false });
  }
});

//!Stretch goals, endpoints for UPDATE and DELETE

app.put("/pathForUpdate/:id", async (req, res) => {
  const dataIdForUpdate = req.params.id; //--> this request endpoint param
  const result = await db.query(
    `UPDATE table SET (column_name =) $1, second_column = $2 WHERE id = ${dataIdForUpdate}  RETURNING *`,
    [arguement, argument2]
  );
  //! , include dataIdForUpdat if not using variable in sql query

  res.json(result.rows);
});

app.delete("/deleteFormData/:id", async (req, res) => {
  const dataIdForDelete = req.params.id;
  const result = await db.query(
    `DELETE FROM table_name WHERE id = $1 RETURNING * `,
    [dataIdForDelete]
  );
  res.json(result.rows);
});
