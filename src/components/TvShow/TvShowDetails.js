import React from 'react';

export default ({network, rating, premiered, genres, language}) => {
  return (
      <div className="show_details">
        <div className="show_details__detail">
          Premiered : {premiered}
        </div>
        <div className="show_details__detail">
          Genres : {genres.map((genre, i) =>
            i + 1 === genres.length ? genre : genre + ", "
        )}
        </div>
        <div className="show_details__detail">Language : {language}</div>
        <div className="show_details__detail">Rating : {rating.average}</div>
        <div className="show_details__detail">Country : {network.country.name}</div>
      </div>

  );
};
