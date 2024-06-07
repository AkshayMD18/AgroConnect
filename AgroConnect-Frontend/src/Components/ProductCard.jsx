import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({ product }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [image, setImage] = useState("");
    const [isSoldOut, setIsSoldOut] = useState(false);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/image/${product._id}`);
                setImage(response.data.image);
            } catch (error) {
                console.error('Error fetching product image:', error);
            }
        };
        fetchImage();
    }, [product._id]);

    useEffect(() => {
        setIsSoldOut(product.quantity === 0);
    }, [product.quantity]);

    const onBuy = async (e) => {
        e.preventDefault();
        const data = {
            name: product.name,
            productId: product._id,
            quantity: selectedQuantity,
            price: product.price
        };
        await axios.post("http://localhost:5000/cart", data)
            .then(() => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="product-card">
        <div className="product-image" style={{ backgroundImage: `url(http://localhost:5000${image})` }}></div>
        <div className="product-details">
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Category: {product.category}</p>
            {isSoldOut ? (
                <p className='products-select-sold-out'>Sold Out</p>
            ) : (
                <React.Fragment>
                    <label className='products-select-quantity'>
                        Select Quantity:
                        <select className='products-select' 
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                        >
                            {[...Array(product.quantity).keys()].map(x => (
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

export default ProductCard;
