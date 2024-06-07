import express from 'express';
import sellSchema from '../models/sellSchema.js'; 

const productRouter = express.Router();


productRouter.get('/', async (req, res) => {
    try {
      const products = await sellSchema.find();
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Server error' });
    }
});

productRouter.get('/image/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const product = await sellSchema.findById(id);
      if (!product) {
          return res.status(404).send('Product not found');
      }
      res.status(200).json({ image: product.image });
  } catch (error) {
      console.error('Error fetching product image:', error);
      res.status(500).send('Error fetching product image');
  }
});

productRouter.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const product = await sellSchema.findById(id);
      if (!product) {
          return res.status(404).send('Product not found');
      }
      res.status(200).json(product);
  } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).send('Error fetching product');
  }
});

productRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const product = await sellSchema.findByIdAndUpdate(id, { $set : {quantity : quantity} }, { new: true });
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.status(200).json(product);
} catch (error) {
    console.error('Error updating product quantity:', error);
    res.status(500).send('Error updating product quantity');
}
});


export default productRouter;
