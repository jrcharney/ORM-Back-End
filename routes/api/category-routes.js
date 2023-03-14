/*
const router = require('express').Router();
const { Category, Product } = require('../../models');
*/
import { Router } from "express";
import { Category, Product } from "../../models";

const router = Router();    // TODO: Why not "new"?
// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body);   // TODO: Make sure this is correct
    // TODO: Do we need to save any session data?
    res.status(200).json(categoryData);
  }catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
      individualHooks: true           // TODO: Do we need this?
    });
    if(!categoryData[0]){
      res.status(404).json({
        message: `Sorry, we don't have a category with id number ${req.params.id}, so there's nothing to update.`
      });
    }
    // TODO: Do we need to update any session data?
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!categoryData[0]) {
      res.status(404).json({
        message: `Sorry, there's no category with id number ${req.params.id}, but we were going to delete it anyway.`
      });
      return;
    }
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

export { router }
// module.exports = router;
