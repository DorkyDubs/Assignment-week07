// please add sql queries here that create tables etc
//! remeber to import db databse

import {db} from
db.query('');


`CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,

)`;

`CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    post_text TEXT NOT NULL,
    likes INT,
    catergory_id INT REFERENCES catergory (id)
)`;