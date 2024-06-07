import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/Categories.css'
import CategoriesList from './CategoriesList';
import AboutUs from './AboutUs';

const Categories = () => {
    return (
        <>
            <div className="categories-container">
                <div className="categories-banner">
                    <h2>Our catagories</h2>
                </div>
                <CategoriesList />
            </div>
            <AboutUs/>
        </>    
    );
};

export default Categories;
