import mysql from "mysql";
import express from "express";
import cors from "cors";

const express = require("express");

const app = express();

const db = mysql
  .createConnection
  //co env, placer dans ignore
  ();

const port = 5000; //replacer dans env

app.get("/", (req, res) => {
  res.json("Bonjour");
});

app.use(express.json());
app.use(cors());

app.get("/games", (req, res) => {
  const seek = "SELECT * FROM games";
  db.query(seek, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/games", (req, res) => {
  const seek =
    "INSERT INTO games (`title`, `description`, `cover`, `price`, `availability`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price,
    req.body.availability,
  ];

  db.query(seek, [values], (err, data) => {
    if (err) return res.json(data);
    return res.json("Le jeu a été ajouté !");
  });
});

app.delete("/books/:id", (req, res) => {
  const gameId = req.params.id;
  const seek = "DELETE FROM books WHERE id = ?";

  db.query(seek, [gameID], (err, data) => {
    if (err) return res.json(data);
    return res.json("Le jeu a été ajouté !");
  });
});

app.listen(port, () => {
  console.log(`Connected to backend on port ${port}`);
});
