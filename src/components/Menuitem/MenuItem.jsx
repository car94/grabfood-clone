import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, tags, imgUrl }) => (
  <div className="app__menuitem">
     <div className="app__menuitem-image">
       <img src={imgUrl} alt="img" />
      </div>
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__opensans" style={{ color: '#000' }}>{title}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
