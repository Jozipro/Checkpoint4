const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const port = process.env.PORT;

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

app.delete("/games/:id", (req, res) => {
  const gameId = req.params.id;
  const seek = "DELETE FROM games WHERE id = ?";

  db.query(seek, [gameId], (err, data) => {
    if (err) return res.json(data);
    return res.json("Le jeu a été ajouté !");
  });
});

app.put("/games/:id", (req, res) => {
  const gameId = req.params.id;
  const seek =
    "UPDATE games  SET `title` = ?, `description` = ?, `price` = ?, `availability` = ? WHERE id = ?";

  db.query(seek, [...values, gameId], (err, data) => {
    if (err) return res.json(data);
    return res.json("Le jeu a été ajouté !");
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
