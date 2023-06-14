import mysql from "mysql";

const express = require("express");

const app = express();

const db = mysql.createConnection();

const port = 5000;

app.listen(port, () => {
  console.log(`Connected to backend on port ${port}`);
});
