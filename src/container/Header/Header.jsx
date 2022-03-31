import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Home > Restaurant > Do Yan Seafood - Sumbersekar" />
      <h1 className="app__header-h1">Do Yan Seafood - Sumbersekar</h1>
      <p className="p__opensans" >Seafood,Snack</p>
      <p className="p__opensans" >4.6</p>
      <p className="p__opensans" >Opening Hours</p>
      <p className="p__opensans" >Rp2.000 off delivery fee with Rp40.000 min. order</p>
      <p className="p__opensans" >Rp10.000 off Sambal Gami Cumi + free nasi</p>
      <p className="p__opensans" >Order fee of Rp3.000 applies for this restaurant.</p>
    </div>
  </div>
);

export default Header;
