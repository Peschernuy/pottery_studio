import React from 'react';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                    HOME
                </Link>
                <span className={location.pathname === '/' ? 'w-full' : ''}></span>
            </div>
            <div>
                <Link to="/">ABOUT</Link>
                {/* <span className={location.pathname === '/about' && 'w-full'}></span> */}
            </div>
            <div>
                <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
                    SHOP
                </Link>
                <span className={location.pathname === '/products' ? 'w-full' : ''}></span>
            </div>
            <div>
                <Link to="/">BOOK CLASSES</Link>
                {/* <span className={location.pathname === 's' && 'w-full'}></span> */}
            </div>
            <div>
                <Link to="/">OPEN HOURS</Link>
                {/* <span className={location.pathname === 's' && 'w-full'}></span> */}
            </div>
            <div>
                <Link to="/">CONTACTS</Link>
                {/* <span className={location.pathname === 's' && 'w-full'}></span> */}
            </div>
        </nav>
    );
};

export default Navbar;
