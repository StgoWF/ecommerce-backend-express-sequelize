const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import the Sequelize connection

// Extend Sequelize's Model class
class Tag extends Model {}

// Initialize Tag model (table) by extending Sequelize's Model class
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
      allowNull: false,  // Ensure that the tag name cannot be null
    }
  },
  {
    sequelize,
    timestamps: false,  // Disable automatic timestamp fields
    freezeTableName: true,  // Prevent Sequelize from renaming the table
    underscored: true,  // Support the use of underscores instead of camelCasing
    modelName: 'Tag',  // Define the model name in singular form
    tableName: 'tags'  // Explicitly specify the table name
  }
);

module.exports = Tag; // Export the model for use elsewhere in the application
