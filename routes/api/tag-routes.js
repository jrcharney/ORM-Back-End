/*
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
*/

import { Router } from "express";
import { Tag, Product, ProductTag } from "../../models";

const router = Router();  // TODO: should there be a "new"

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findAll({
      include: [
        {
          model : Tag,
          attributes : [
            "id",
            "tag_name"
          ]
        }
      ]
    })
  }catch(err){
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id)
  }catch(err){
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
