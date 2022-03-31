import React from 'react';
import { BsMinecartLoaded } from 'react-icons/bs';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.grabfood} alt="logo" />
    </div>
    <div className="app__navbar-location">
      <input type="text" placeholder="Type your location" />
    </div>
    <div className="app__navbar-button">
      <button type='button'>
      <div className="app__navbar-cart-icon">
        <BsMinecartLoaded />
      </div>
      </button>
      <button type='button'>
      <span>Login/Sign Up</span>
      </button>
      </div>
  </nav>
);

export default Navbar;
