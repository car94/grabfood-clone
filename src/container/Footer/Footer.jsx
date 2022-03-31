import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
   

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Frequently Searched</h1>
        <p className="p__opensans">Burger King Menu</p>
        <p className="p__opensans">Chatime Menu</p>
        <p className="p__opensans">Domino's Pizza Menu</p>
        <p className="p__opensans">McDonald's Menu</p>
        <p className="p__opensans">Pizza Hut Menu</p>
        <p className="p__opensans">Subway Menu</p>
        <p className="p__opensans">Taco Bell Menu</p>
        <p className="p__opensans">Wendy's Menu</p>
      </div>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Popular Cuisines</h1>
        <p className="p__opensans">Chinese Food</p>
        <p className="p__opensans">Fast Food</p>
        <p className="p__opensans">Indian Food</p>
        <p className="p__opensans">Japanese Food</p>
        <p className="p__opensans">Korean Food</p>
        <p className="p__opensans">Malaysian Food</p>
        <p className="p__opensans">Mexican Food</p>
        <p className="p__opensans">Thai Food</p>
      </div>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">About Grab</h1>
        <p className="p__opensans">About Grab</p>
        <p className="p__opensans">About GrabFood</p>
        <p className="p__opensans">Blog</p>
      </div>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Support</h1>
        <p className="p__opensans">Help</p>
        <p className="p__opensans">FAQs</p>
        <p className="p__opensans">Be a GrabFood Merchant</p>
        <p className="p__opensans">Drive With Grab</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© Grab 2022</p>
    </div>

  </div>
);

export default Footer;
