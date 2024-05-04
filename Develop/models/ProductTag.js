const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Extends off Sequelize's Model class
class ProductTag extends Model {}

// Initialize ProductTag model (table) by extending off Sequelize's Model class
ProductTag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,  // Automatically increment the ID for each new entry
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',  // Establishes a reference to the Product model
        key: 'id',
      },
      allowNull: false,  // This field cannot be empty
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',  // Establishes a reference to the Tag model
        key: 'id',
      },
      allowNull: false,  // This field cannot be empty
    }
  },
  {
    sequelize,
    timestamps: false,  // No need to keep track of timestamps for this model
    freezeTableName: true,  // Prevent Sequelize from renaming the table
    underscored: true,  // Supports the use of underscores instead of camelCasing
    modelName: 'Product_tag',  // This is how the model is identified in Sequelize
  }
);

module.exports = ProductTag;
