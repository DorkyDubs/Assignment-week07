// please add sql queries here that create tables etc
//! remeber to import db databse

import { db } from "./server.js";
db.query(`CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) UNIQUE

);`);

db.query(`CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    post_text TEXT NOT NULL,
    likes INT,
    category_id INT REFERENCES categories (id)
);`);

db.query(`INSERT INTO categories (category_name) VALUES ('Sport'),('Travel'),
        ('Weather'),('Food'),('Movies & Television'),('Music');`);

// this throws erros but works!
