import React from 'react';
import { NavLink } from 'react-router-dom';

export default (data)  => {
  let name = data.show.name;
  let imageURL = data.show.image.medium;
  return (
      <div className="show">
        <NavLink to={`/${name}`} className="show__container">
          <img src={imageURL} alt={`${name}`}/>
          <div className="show__container__details">
            <div className="show__container__details__name">{name}</div>
          </div>
        </NavLink>
      </div>
  );
};