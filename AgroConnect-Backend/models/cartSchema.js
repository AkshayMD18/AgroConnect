
import mongoose from 'mongoose';


const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sell',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

const Cart = mongoose.model('cart', cartSchema);

export default Cart;
