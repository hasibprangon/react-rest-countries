import React from 'react';
import './Person.css'
const Person = () => {
    return (
        <div>
            <h1>This is Person component</h1>
            <nav className='person'>
                <a href="Home">Home</a>
                <a href="About">About us</a>
                <a href="Shop">Shop</a>

            </nav>
        </div>
    );
};

export default Person;