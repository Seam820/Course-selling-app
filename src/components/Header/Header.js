import React from 'react';
import logo from '../../image/logo.png'
import './Header.css';
const Header = () => {
    return (
        <div className="header"> 
            <img src={logo} alt=""/>
            <nav>
                <a href="/explore">Explore</a>
                <a href="/plan&pricing">Plan & Pricing</a>
                <a href="ourBusiness">Our Business</a>
            </nav>
        </div>
    );
};

export default Header;