import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/Products.css'
import ProductList from './ProductList';
import AboutUs from './AboutUs';

const Products = () => {
    return (
        <>
            <div className="products-container">
                <div className='products-img'>
                    <h2>Our Products</h2>
                </div>
                <ProductList />
                <div className="products-buttons">
                    <Link to="/sell" className="product-button">Sell your products here</Link>
                </div>
            </div>
            <AboutUs/>
        </>    
    );
};

export default Products;
