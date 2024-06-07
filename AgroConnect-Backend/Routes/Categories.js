import express from 'express';
import sellSchema from '../models/sellSchema.js'; 

const categoriesRouter = express.Router();


categoriesRouter.get('/', async (req, res) => {
    try {
      const categories = await sellSchema.find();
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categoriess:', error);
      res.status(500).json({ message: 'Server error' });
    }
});

categoriesRouter.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const categories = await sellSchema.findById(id);
      if (!categories) {
          return res.status(404).send('categories not found');
      }
      res.status(200).json(categories);
  } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).send('Error fetching categories');
  }
});

categoriesRouter.get('/image/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const categories = await sellSchema.findById(id);
      if (!categories) {
          return res.status(404).send('categories not found');
      }
      res.status(200).json({ image: categories.image });
  } catch (error) {
      console.error('Error fetching categories image:', error);
      res.status(500).send('Error fetching categories image');
  }
});

categoriesRouter.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const categories = await sellSchema.findByIdAndUpdate(id, { $set : {quantity : quantity} }, { new: true });
    if (!categories) {
        return res.status(404).send('categories not found');
    }
    res.status(200).json(categories);
} catch (error) {
    console.error('Error updating product quantity:', error);
    res.status(500).send('Error updating product quantity');
}
});


export default categoriesRouter;
