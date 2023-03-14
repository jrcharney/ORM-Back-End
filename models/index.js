/*
// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
*/
import Category from "./Category";
import Product from "./Product";
import Tag from "./Tag";
import ProductTag from "./ProductTag";

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: "ProductTag",
  foreignKey: "product_id"
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag,{
  through: "ProductTag",
  foreignKey: "tag_id"
})

export {
  Category,
  Product,
  Tag,
  ProductTag
};

/*
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
*/