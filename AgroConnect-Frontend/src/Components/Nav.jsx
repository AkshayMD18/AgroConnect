import React, { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';


function Nav() {
    const { auth, signOut } = useContext(AuthContext);
    const navigateTo = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigateTo('/');
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <nav className="navbar">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    {auth?.role === 'farmer' && <Link to="/products">Products</Link>}
                    {auth?.role === 'consumer' && <Link to="/categories">Categories</Link>}
                </div>
                <div className="nav-icons">
                    <div className="nav-shopping-cart">
                        <Link to="/cart" className="fa-solid fa-cart-shopping" />
                    </div>
                    {auth ? (
                        <>
                            <div className="nav-profile">
                                <Link to="/profile" className="fa-solid fa-user"></Link>
                            </div>
                            <div className="nav-signout">
                                <Link onClick={handleSignOut} className="fa-solid fa-right-from-bracket"></Link>
                            </div>
                        </>
                    ) : (
                        <div className="nav-log-in">
                            <Link to="/login" className="fa-solid fa-user"></Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Nav;
