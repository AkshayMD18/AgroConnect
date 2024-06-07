import "./style/Register.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {username, password, role}
            const response = await axios.post('http://localhost:5000/register', data);
            if (response.status === 201) {
                alert('User registered successfully');
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
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
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select 
                        id="role" 
                        name="role" 
                        required 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">Select Option</option>
                        <option value="farmer">Farmer</option>
                        <option value="consumer">Consumer</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-register">Register</button>
                    <Link to="/login" className="btn-login">Log In</Link>
                </div>
            </form>
        </div>
    );
}

export default Register 