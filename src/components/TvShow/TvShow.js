import React from 'react';

export default (data) => {
  if (data.name === undefined) {
    return null
  }

  const {name, image, summary, type, url, premiered, genres} = data;
  console.log(image)
  return (
      <div className="show_details">
        <div className="show_details__img-container">
          <img className="show_details__img-container__img" src={image.original} alt={name}/>
        </div>
        <div className="show_details__container">
          <div className="show_details__container__name">{name}</div>
        </div>
      </div>
  );
};
