import React, { useState } from 'react';
import "./style/Sell.css"
import axios from 'axios';

const Sell = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('null');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/sell', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Item put for sale:", response.data);
            setName('');
            setQuantity('');
            setPrice('');
            setCategory('');
            setImage(null);
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };

    return (
        <div className="sell-container">
            <h2>Sell Item</h2>
            <form className="sell-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input 
                        type="number" 
                        id="quantity" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input 
                        type="number" 
                        id="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Meat">Meat</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Fruits">Fruits</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input 
                        type="file" 
                        id="image" 
                        accept="image/*" 
                        onChange={(e) => setImage(e.target.files[0])} 
                        required 
                    />
                </div>
                <br/>
                <button type="submit">Sell Item</button>
            </form>
        </div>
    );
};

export default Sell;
