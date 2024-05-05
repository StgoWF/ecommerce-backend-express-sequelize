const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Extends off Sequelize's Model class
class Tag extends Model {}

// Initialize Tag model (table) by extending off Sequelize's Model class
Tag.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,  // Automatically increment the ID for each new entry
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,  // This field cannot be empty
    }
  },
  {
    sequelize,
    timestamps: false,  // No need to keep track of timestamps for this model
    freezeTableName: true,  // Prevent Sequelize from renaming the table
    underscored: true,  // Supports the use of underscores instead of camelCasing
    modelName: 'Tags',  // This is how the model is identified in Sequelize
  }
);

module.exports = Tag;
