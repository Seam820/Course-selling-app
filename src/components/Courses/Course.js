import React from 'react';
import './Course.css';

const Course = (props) => {
    const { title, price, instructor } = props.course;
    
    return (
        <div className="course-card">
            <div className="course-info">
                <h3>{title}</h3>
                <p>Instructor: <small>{instructor}</small></p>
                <h4 className="price">${price}</h4>
                <button 
                    className="enroll-btn"
                    // When clicked, it calls the function with 'props.course'
                    onClick={() => props.handleAddCourse(props.course)}
                >
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Course;