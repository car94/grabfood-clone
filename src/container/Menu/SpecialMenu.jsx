import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-menu" id="todays">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Today's Offer</p>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu" id="waiki">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">WAIKI Rice Box</p>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu" id="aigo">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Aigo</p>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu" id="chingu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Chingu</p>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu" id="seerameon">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Seerameon Ikan</p>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu" id="samjang">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Samjang Gami (Extra Pedas)</p>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
        <div className="app__card">
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        <div className="card" style={{ marginBottom: 15 }}>
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu" id="omo">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Omo</p>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu" id="saranghaeyo">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Saranghaeyo</p>
        <div className="card">
          {data.todays.map((today, index) => (
            <MenuItem key={today.title + index} title={today.title} imgUrl={today.imgUrl} tags={today.tags} />
          ))}
        </div>
      </div>
    </div>
  </div>
  
);

export default SpecialMenu;
