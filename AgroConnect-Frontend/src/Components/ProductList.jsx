import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { AuthContext } from "./AuthContext.jsx";
import './style/ProductCard.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchProducts = async () => {
            if (auth) {
                try {
                    const response = await axios.get('http://localhost:5000/products', {
                        params: { userId: auth.userId }
                    });
                    setProducts(response.data);
                } catch (error) {
                    console.error('Error fetching products from frontend:', error);
                }
            }
        };

        fetchProducts();
    }, [auth]);

    if (!auth) {
        return <p>Please log in to view your products.</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
