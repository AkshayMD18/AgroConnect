import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoriesCard = ({ categories }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [image, setImage] = useState("");
    const [isSoldOut, setIsSoldOut] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/categories/image/${categories._id}`);
                setImage(response.data.image);
            } catch (error) {
                console.error('Error fetching categories image:', error);
            }
        };
        fetchImage();
    }, [categories._id]);

    useEffect(() => {
        setIsSoldOut(categories.quantity === 0);
    }, [categories.quantity]);

    const onBuy = async (e) => {
        e.preventDefault();
        const data = {
            name: categories.name,
            productId: categories._id,
            quantity: selectedQuantity,
            price: categories.price
        };
        await axios.post("http://localhost:5000/cart", data)
            .then(() => {
                console.log('Data sent successfully:', data);
            })
            .catch((err) => {
                console.error('Error sending data to cart:', err);
            });
    };

    return (
        <div className="categories-card">
        <div className="categories-image" style={{ backgroundImage: `url(http://localhost:5000${image})` }}></div>
        <div className="categories-details">
            <h3>{categories.name}</h3>
            <p>Price: ₹{categories.price}</p>
            <p>Quantity: {categories.quantity}</p>
            <p>Category: {categories.category}</p>
            {isSoldOut ? (
                <p className='categories-select-sold-out'>Sold Out</p>
            ) : (
                <React.Fragment>
                    <label className='categories-select-quantity'>
                        Select Quantity:
                        <select className='categories-select'
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                        >
                            {[...Array(categories.quantity).keys()].map(x => (
                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                            ))}
                        </select>
                    </label>
                    <Link to="/cart" className="buy-button" onClick={onBuy}>Add to cart</Link>
                </React.Fragment>
            )}
        </div>
    </div>
    );
};

export default CategoriesCard;
