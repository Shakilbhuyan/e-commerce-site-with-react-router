import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-around mx-10 bg-teal-400 p-5 rounded font-medium text-yellow-200'>
         <Link to="/">Home</Link>
         <Link to="/review">Review</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;