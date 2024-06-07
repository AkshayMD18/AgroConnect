import express from 'express';
import Sell from '../models/sellSchema.js'; 
import multer from 'multer';
import path from 'path';

const sellRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

sellRouter.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, quantity, price, category } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        const sellItem = new Sell({
            name,
            quantity,
            price,
            category,
            image
        });

        await sellItem.save();

        res.status(201).json({ message: 'Item added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add item', error: error.message });
    }
});

export default sellRouter;
