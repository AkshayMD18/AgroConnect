import express from 'express';
import userSchema from '../models/userSchema.js';

const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const existingUser = await userSchema.findOne({ username });
        if (existingUser) {
            return res.status(400).send({ message: 'Username already exists' });
        }
        const newUser = new userSchema({ username, password, role });
        await newUser.save();

        res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).send({ message: 'Server error', error: err });
    }
});

export default registerRouter;
