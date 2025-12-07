import React, { useState } from 'react';
import fakeData from '../../courseData';
import Course from '../Courses/Course';
import Cart from '../Cart/Cart'; // Import the new Cart
import './Shop.css';

const Shop = () => {
    const [courses, setCourses] = useState(fakeData);
    
    // NEW: State to hold the cart items
    const [cart, setCart] = useState([]);

    // NEW: Function to add course to cart
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
                        handleAddCourse={handleAddCourse} // Pass the function down
                        ></Course>)
                }
            </div>
            
            {/* RIGHT SIDE: Cart */}
            <div className="cart-wrapper">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;