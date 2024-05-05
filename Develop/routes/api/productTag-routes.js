const router = require('express').Router();
const { ProductTag } = require('../../models');

// Create an association between a product and a tag
router.post('/', async (req, res) => {
  try {
    const productTag = await ProductTag.create(req.body);
    res.status(200).json(productTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Read all associations between products and tags
router.get('/', async (req, res) => {
  try {
    const productTags = await ProductTag.findAll();
    res.status(200).json(productTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Read a specific product-tag association by ID
router.get('/:id', async (req, res) => {
  try {
    const productTag = await ProductTag.findByPk(req.params.id);
    if (!productTag) {
      res.status(404).json({ message: 'No product tag found with this id!' });
      return;
    }
    res.status(200).json(productTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an association between a product and a tag by its ID
router.post('/', async (req, res) => {
    const { productId, tagId } = req.body;
    if (!productId || !tagId) {
      res.status(400).json({ message: 'Product ID and Tag ID are required.' });
      return;
    }
    try {
      const productTag = await ProductTag.create({
        productId: productId,
        tagId: tagId
      });
      res.status(201).json(productTag);
    } catch (err) {
      res.status(400).json(err);
    }
  });
// Update an existing product-tag association by ID
router.put('/:id', async (req, res) => {
    try {
      // Extract productTagId from the request parameters
      const productTagId = req.params.id;
  
      // Update the productTag details based on the provided id and request body
      const updatedProductTag = await ProductTag.update(req.body, {
        where: {
          id: productTagId  // Ensure to match the productTag by id
        }
      });
  
      // Check if any record was actually updated
      if (updatedProductTag[0] === 0) {
        res.status(404).json({ message: 'No product tag found with this id or no data changed.' });
        return;
      }
  
      res.status(200).json({ message: 'Product tag updated successfully.' });
    } catch (err) {
      res.status(400).json(err);  // Send any errors back as a 400 Bad Request response
    }
  });
  

  

// Delete an association between a product and a tag by its ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductTag = await ProductTag.destroy({
      where: { id: req.params.id },
    });
    if (!deletedProductTag) {
      res.status(404).json({ message: 'No product tag found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Product tag deleted successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
