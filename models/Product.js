/*
// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
*/
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

// Initialize Product model (table) by extending off Sequelize's Model class
export class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price : DataTypes.DECIMAL(2),
    allowNull: false,
    validate: {
      isDecimal: true
    },
    stock: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      isInt: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// module.exports = Product;
