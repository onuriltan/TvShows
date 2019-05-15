import React from 'react';
import { NavLink } from 'react-router-dom';

export default (data)  => {
  let name = data.show.name;
  let imageURL = data.show.image.medium;
  return (
      <div className="show-item">
        <NavLink to={`/${name}`} className="show-item__container">
          <img src={imageURL} alt={`${name}`}/>
          <div className="show-item__container__details">
            <div className="show-item__container__details__name">{name}</div>
          </div>
        </NavLink>
      </div>
  );
};
