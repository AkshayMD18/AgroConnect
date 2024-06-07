import express from 'express';
import userSchema from '../models/userSchema.js';

const loginRouter = express.Router();


loginRouter.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userSchema.findOne({ username, password});
        if (user) {
            res.status(200).send({ message: 'Login successful' });
        } else {
            res.status(400).send({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).send({ message: 'Server error', error: err });
    }
});

export default loginRouter;
