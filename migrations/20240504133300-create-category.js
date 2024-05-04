'use strict';
/** @type {import('sequelize').QueryInterface} */
const { DataTypes } = require('sequelize');

module.exports = {
  // Define the migration to create the 'categories' table
  async up(queryInterface, Sequelize) {
    // Create the 'categories' table with the specified columns
    await queryInterface.createTable('categories', {
      // Define the 'id' column
      id: {
        allowNull: false, // Not nullable
        autoIncrement: true, // Auto-incrementing
        primaryKey: true, // Primary key
        type: DataTypes.INTEGER // Data type is INTEGER
      },
      // Define the 'category_name' column
      category_name: {
        type: DataTypes.STRING // Data type is STRING
      },
      // Define the 'createdAt' column
      createdAt: {
        allowNull: false, // Not nullable
        type: DataTypes.DATE // Data type is DATE
      },
      // Define the 'updatedAt' column
      updatedAt: {
        allowNull: false, // Not nullable
        type: DataTypes.DATE // Data type is DATE
      }
    });
  },
  // Define the migration to drop the 'categories' table
  async down(queryInterface, Sequelize) {
    // Drop the 'categories' table
    await queryInterface.dropTable('categories');
  }
};
