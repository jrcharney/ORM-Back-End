/*
const express = require('express');
const routes = require('./routes');
*/
import { express } from "express";
import { routes } from "./routes";
// import sequelize connection
// import sequelize from "sequelize";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
