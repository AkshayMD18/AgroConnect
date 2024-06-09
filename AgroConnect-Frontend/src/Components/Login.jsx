import "./style/Login.css"
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "./AuthContext";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.status === 200) {
                signIn(response.data.user);
                alert("Login Successful")
                navigateTo('/');
            }
        } catch (error) {
            alert('Invalid credentials');
        }
    };


    return(
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-login">Log In</button>
                    <Link to="/register" className="btn-register">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default Login