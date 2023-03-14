//const { Model, DataTypes } = require('sequelize');
//const sequelize = require('../config/connection.js');
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

export class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      // allowNull: false          // Not sure why this wasn't included
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//module.exports = Tag;
