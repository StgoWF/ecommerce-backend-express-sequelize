const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
      // Retrieve all categories from the database and include associated Products
      const categories = await Category.findAll({
          include: [{ model: Product }]
      });
      // Send the retrieved categories as a JSON response
      res.json(categories);
  } catch (error) {
      // Log the error to the console for debugging
      console.error('Error getting categories:', error);
      // Respond with a 500 status code and an error message
      res.status(500).json({ message: 'Error getting categories', error: error });
  }
});


router.get('/:id', async (req, res) => {
  try {
      // Find a single category by its ID and include associated Products
      const category = await Category.findByPk(req.params.id, {
          include: [{ model: Product }]
      });
      if (category) {
          // If the category is found, send it as a JSON response
          res.json(category);
      } else {
          // If the category is not found, respond with a 404 status code and message
          res.status(404).json({ message: 'Category not found' });
      }
  } catch (error) {
      // Log the error to the console for debugging
      console.error('Error getting the category:', error);
      // Respond with a 500 status code and an error message
      res.status(500).json({ message: 'Error getting the category', error: error });
  }
});


router.post('/', async (req, res) => {
  try {
      // Create a new category with data provided in the request body
      const newCategory = await Category.create({
          category_name: req.body.category_name
      });
      // Respond with the newly created category
      res.status(201).json(newCategory);
  } catch (error) {
      // Log the error and respond with a 500 status code for server errors
      console.error('Error creating a new category:', error);
      res.status(500).json({ message: 'Error creating a new category', error: error });
  }
});


router.put('/:id', async (req, res) => {
  try {
      // Update a category identified by id with the new data provided in the request body
      const updatedCategory = await Category.update(req.body, {
          where: { id: req.params.id }
      });
      if (updatedCategory[0] > 0) {
          // If the update was successful, respond with a success message
          res.json({ message: 'Category updated successfully' });
      } else {
          // If no records were updated, respond with a 404 not found
          res.status(404).json({ message: 'Category not found' });
      }
  } catch (error) {
      // Log the error and respond with a 500 status code for server errors
      console.error('Error updating the category:', error);
      res.status(500).json({ message: 'Error updating the category', error: error });
  }
});


router.delete('/:id', async (req, res) => {
  try {
      // Delete a category identified by id
      const deletedCategory = await Category.destroy({
          where: { id: req.params.id }
      });
      if (deletedCategory) {
          // If the deletion was successful, respond with a success message
          res.json({ message: 'Category deleted successfully' });
      } else {
          // If no records were deleted, respond with a 404 not found
          res.status(404).json({ message: 'Category not found' });
      }
  } catch (error) {
      // Log the error and respond with a 500 status code for server errors
      console.error('Error deleting the category:', error);
      res.status(500).json({ message: 'Error deleting the category', error: error });
  }
});

module.exports = router;
