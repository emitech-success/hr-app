import React, { useState } from 'react';
import '../styles/Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false)
  return (
    <nav className="navbar">
      <div className="logo">HR Solutions</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-smallscreen">
      <GiHamburgerMenu fontSize={27} color="#ffffff" onClick={() => {setTogglemenu(true)}} />
      {togglemenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdClose
        color="#ffffff"
          fontSize={27}
          className="overlay__close"
          onClick={() => {setTogglemenu(false)}}
        />

        <ul className="app__navbar-smallscreen-links">
        <li><a className='nav_link_items' href="#hero">Home</a></li>
        <li><a className='nav_link_items' href="#about-us">About Us</a></li>
        <li><a className='nav_link_items' href="#services">Services</a></li>
        <li><a className='nav_link_items' href="#contact">Contact</a></li>
        </ul>
      </div>
      )}

    </div>
    </nav>
  );
}

export default Navbar;
