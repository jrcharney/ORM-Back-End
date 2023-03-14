/*
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
*/

import { Router } from "express";
import categoryRoutes from "./category-routes.js"
import productRoutes from "./product-routes.js"
import tagRoutes from "./tag-routes.js"

const router = Router();     // TODO: Do we need a "new"

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

export { router };

//module.exports = router;
