const router = require('express').Router();
const { ProductTag } = require('../../models');

// Crear una asociación entre un producto y una etiqueta
router.post('/', async (req, res) => {
  try {
    const productTag = await ProductTag.create(req.body);
    res.status(200).json(productTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Leer todas las asociaciones entre productos y etiquetas
router.get('/', async (req, res) => {
  try {
    const productTags = await ProductTag.findAll();
    res.status(200).json(productTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Actualizar una asociación entre un producto y una etiqueta por su `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedProductTag = await ProductTag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedProductTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Eliminar una asociación entre un producto y una etiqueta por su `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductTag = await ProductTag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedProductTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
