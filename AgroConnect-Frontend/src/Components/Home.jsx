import React from 'react';
import  "./style/Home.css"
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';


function Home() {
    return (
        <>
            <div className="home-container">
                <header className="home-header">
                    <h1>AgroConnect</h1>
                </header>
                <div className="home-content">
                    <div className='home-text'>
                        <h2>From Farm to Fork<br/>Bridging Farmers and Consumers for Fresh, Local Goodness</h2>
                        <p>Welcome to AgroConnect, where farmers and consumers unite for fresher, local food. Buy directly from farmers, ensuring top-quality produce and support for those who grow it. Join us in celebrating the joy of eating locally and building a sustainable future.</p>
                    </div>
                    <div className="home-cards">
                        <a href="/register" className="home-card">
                            <div className="card-image farmer-image"></div>
                            <h3>Join as Farmer</h3>
                            <p>Become a part of our farming community</p>
                        </a>
                        <a href="/register" className="home-card">
                            <div className="card-image consumer-image"></div>
                            <h3>Join as Consumer</h3>
                            <p>Support local farmers and get fresh produce</p>
                        </a>
                    </div>
                </div>
            </div>
            <ContactUs/>
            <AboutUs/>
        </>
    );
};

export default Home;
