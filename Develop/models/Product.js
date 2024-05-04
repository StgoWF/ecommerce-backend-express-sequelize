const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import the Sequelize connection

// Define the Product model
class Product extends Model {}

// Initialize Product model with table definitions
Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,  // Automatically increment the ID for each new entry
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,  // Ensure that the product name cannot be null
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,  // Ensure that the price cannot be null
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Ensure that the stock level cannot be null
    defaultValue: 10,  // Set a default value if none is provided
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',  // Reference the 'categories' table
      key: 'id',  // Reference the 'id' column in 'categories'
    },
  },
}, {
  sequelize,
  tableName: 'products',  // Explicitly specify the table name
  timestamps: false,  // Disable automatic timestamp fields
  freezeTableName: true,  // Prevent Sequelize from renaming the table
  underscored: true,  // Use snake_case rather than camelCasing
  modelName: 'product',  // Use a singular form for the model name
});

module.exports = Product; // Export the model for use elsewhere in the application
