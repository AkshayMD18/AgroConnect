import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './style/Profile.css'

function Profile() {
    const { auth, signOut } = useContext(AuthContext);
    const navigateTo = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigateTo('/login');
    };

    if (!auth) {
        return <p>Please log in.</p>;
    }

    return (
        <>
        <div className="profile-banner">
            <h2>{auth.name}</h2>
            <p>{auth.role}</p>
        </div>
        <div className="profile-container">
            <div className="profile-details">
                <h3>Account</h3>
                <p>Manage your account settings and set email preferences.</p>
                <h3>Email Verification</h3>
                <p>Verify your email address to secure your account.</p>
                <h3>Link Account</h3>
                <p>Link your account to other services for easy access.</p>
                <h3>Settings</h3>
                <p>Adjust your account settings and preferences.</p>
            </div>
            <button onClick={handleSignOut} className="btn-signout">Sign Out</button>
        </div>
        </>
    );
}

export default Profile;
