import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/Cart.css'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cart');
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/cart/${id}`);
            setCartItems(cartItems.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    };

    const handleCheckout = async () => {
        try {
            for (let item of cartItems) {
                const response = await axios.get(`http://localhost:5000/products/${item.productId}`);
                const product = response.data;

                const newQuantity = product.quantity - item.quantity;
                await axios.patch(`http://localhost:5000/products/${item.productId}`, { quantity: newQuantity });
            }
            await axios.delete('http://localhost:5000/cart');
            setCartItems([]);
            alert('Items bought');
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cartItems.length > 0 ? (
            <>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item._id} className="cart-item">
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ₹{item.price}</p>
                            </div>
                            <button onClick={() => handleDelete(item._id)} className="delete-button">Delete</button>
                        </div>
                    ))}
                </div>
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
            </>
        ) : (
            <p>Your cart is empty.</p>
        )}
    </div>
    );
};

export default Cart;
