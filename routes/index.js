/*
const router = require('express').Router();
const apiRoutes = require('./api');
*/

import { Router } from "express";
import { apiRoutes } from "./api";

export const router = new Router();

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

//module.exports = router;