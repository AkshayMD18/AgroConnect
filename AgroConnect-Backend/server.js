import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import loginRouter from './Routes/Login.js';
import registerRouter from './Routes/Registration.js'; 
import sellRouter from './Routes/Sell.js';
import productRouter from './Routes/Products.js';
import cartRouter from './Routes/Cart.js';
import categoriesRouter from './Routes/Categories.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://127.0.0.1:27017/AgroConnect')
    .then(() => {
        console.log("Connection established")
    })
    .catch(err => {
        console.error("Connection error", err);
    });


app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/sell', sellRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/categories', categoriesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
