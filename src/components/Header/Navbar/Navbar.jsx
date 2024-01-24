import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">SHOP</Link>
            <Link to="/">BOOK CLASSES</Link>
            <Link to="/">OPEN HOURS</Link>
            <Link to="/">CONTACTS</Link>
        </nav>
    );
};

export default Navbar;
