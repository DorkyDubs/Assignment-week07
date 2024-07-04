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
const dbCString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbCString,
});

const PORT = 7878;
app.listen(PORT, () => {
  console.log(`Your server is running on port: ${PORT}`);
});

//!Stretch goals, endpoints for UPDATE and DELETE

app.put("/pathForUpdate/:id", async (req, res) => {
  const dataIdForUpdate = req.params.id; //--> this request endpoint param
  const result = await db.query(
    `UPDATE table SET (column_name =) $1, second_column = $2 WHERE id = ${dataIdForUpdat}  RETURNING *`,
    [arguement, argument2]
  );
  //! , include dataIdForUpdat if not using variable in sql query

  res.json(result.rows);
});

app.delete("/deleteeFormData/:id", async (req, res) => {
  const dataIdForDelete = req.param.id;
  const result = await db.query(
    `DELETE FROM table_name WHERE id = $1 RETURNING * `,
    [dataIdForDelete]
  );
  res.json(result.rows);
});
