const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Extends off Sequelize's Model class
class Product extends Model {}

// Initialize Product model (table) by extending off Sequelize's Model class
Product.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,  // Validates the price to ensure it is a decimal
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,  // Default stock value when none is provided
      validate: {
        isNumeric: true,  // Ensures the stock value is numeric
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',  // Establishes a reference to the Category model
        key: 'id',
      },
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

module.exports = Product;
