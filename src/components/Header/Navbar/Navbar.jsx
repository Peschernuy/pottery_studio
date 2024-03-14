import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar__container">
      <div>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          HOME
        </Link>
        <span className={location.pathname === "/" ? "w-full" : ""}></span>
      </div>
      <div>
        <Link to="/about">ABOUT</Link>
        <span className={location.pathname === "/about" ? "w-full" : ""}></span>
      </div>
      <div>
        <Link to="/products">SHOP</Link>
        <span
          className={location.pathname === "/products" ? "w-full" : ""}
        ></span>
      </div>
      <div>
        <Link to="/bookClasses">BOOK CLASSES</Link>
        <span
          className={location.pathname === "/bookClasses" ? "w-full" : ""}
        ></span>
      </div>
      <div>
        <Link to="/openHours">OPEN HOURS</Link>
        <span className={location.pathname === '/openHours' ? "w-full" : ""}></span>
      </div>
      <div>
        <Link to="/contacts">CONTACTS</Link>
        <span className={location.pathname === '/contacts' ? "w-full" : ""}></span>
      </div>
    </nav>
  );
};

export default Navbar;
