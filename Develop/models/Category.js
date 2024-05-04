const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Extending the Model class from Sequelize
class Category extends Model {}

// Initializing Category model (table) by extending Sequelize's Model class
Category.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,  // Automatically increment the ID for each new entry
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,  // This field cannot be empty
    }
  },
  {
    sequelize,
    timestamps: true,  // No need to keep track of timestamps for this model
    freezeTableName: true,  // Prevent Sequelize from renaming the table
    underscored: true,  // Supports the use of underscores instead of camelCasing
    modelName: 'category',  // This is how the model is identified in Sequelize
    tableName: 'categories',
    created_at: 'createdAt',  // Specify the name of the column in the database
    updated_at: 'updatedAt'   // Specify the name of the column in the database
  }
);

module.exports = Category;
