import mysql from "mysql";

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

app.listen(port, () => {
  console.log(`Connected to backend on port ${port}`);
});
