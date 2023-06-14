import mysql from "mysql";

const express = require("express");

const app = express();

const port = 5000;

app.listen(port, () => {
  console.log(`Connected to backend on port ${port}`);
});
