import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <nav className="navbar">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/categories">Categories</Link>
                </div>
                <div class="nav-icons">
                    <div className="nav-shopping-cart">
                        <Link to="/cart" i className="fa-solid fa-cart-shopping"/>
                    </div>
                    <div className="nav-log-in">
                        <Link to="/login" i className="fa-solid fa-user"/>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
