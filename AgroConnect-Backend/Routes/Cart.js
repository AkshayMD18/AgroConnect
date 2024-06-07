import express from 'express';
import cartSchema from '../models/cartSchema.js';

const cartRouter = express.Router();

cartRouter.post('/', async (req, res) => {
    try {
        const cartItem = new cartSchema(req.body);
        await cartItem.save();
        res.status(200).send('Item added to cart');
    } catch (error) {
        console.error('Error adding item to cart:', error.message, error.stack);
        res.status(500).send('Error adding item to cart');
    }
});

cartRouter.get('/', async (req, res) => {
    try {
        const cartItems = await cartSchema.find({});
        res.status(200).json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error.message, error.stack);
        res.status(500).send('Error fetching cart items');
    }
});

cartRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await cartSchema.findByIdAndDelete(id);
        res.status(200).send('Item deleted from cart');
    } catch (error) {
        console.error('Error deleting cart item:', error.message, error.stack);
        res.status(500).send('Error deleting cart item');
    }
});

cartRouter.delete('/', async (req, res) => {
    try {
        await cartSchema.deleteMany({});
        res.status(200).send('All items deleted from cart');
    } catch (error) {
        console.error('Error during checkout:', error.message, error.stack);
        res.status(500).send('Error during checkout');
    }
});

export default cartRouter;
