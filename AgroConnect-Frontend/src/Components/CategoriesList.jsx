import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoriesCard from './CategoriesCard';
import './style/CategoriesCard.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const CategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const [groupedCategories, setGroupedCategories] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
                const grouped = groupByCategory(response.data);
                setCategories(response.data);
                setGroupedCategories(grouped);
            } catch (error) {
                console.error('Error fetching catagories from frontend:', error);
            }
        };

        fetchCategories();
    }, []);

    const groupByCategory = (categories) => {
        return categories.reduce((acc, categories) => {
            const category = categories.category.toLowerCase();
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(categories);
            return acc;
        }, {});
    };

    return (
        <div className="categories-list">
            {Object.keys(groupedCategories).map(category => (
                <div key={category} className="category-section">
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="category-swiper"
                    >
                        {groupedCategories[category].map(categories => (
                            <SwiperSlide key={categories._id}>
                                <CategoriesCard categories={categories} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
};

export default CategoriesList;
