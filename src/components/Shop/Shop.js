import React, { useState } from 'react';
import fakeData from '../../courseData';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart'; 
import './Shop.css';

const Shop = () => {
    const [courses, setCourses] = useState(fakeData);
    

    const [cart, setCart] = useState([]);

    
    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="course-container">
                {
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleAddCourse={handleAddCourse}
                        ></Course>)
                }
            </div>
            <div className="cart-wrapper">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;