import React from 'react';

export default ({network, rating, premiered, genres, language}) => {
  return (
      <div className="show_details">
        { premiered
            ?
            <div className="show_details__detail">
              Premiered : {premiered}
            </div>
            : null
        }
        { genres
            ?
            <div className="show_details__detail">
              Genres : {genres.map((genre, i) =>
                i + 1 === genres.length ? genre : genre + ", "
            )}
            </div>
            : null
        }
        { language
            ?
            <div className="show_details__detail">Language : {language}</div>
            : null
        }
        { rating.average !== undefined && rating.average !== null
            ?
            <div className="show_details__detail">Rating : {rating.average}</div>
            : null
        }
        { network !== undefined && network !== null
            ?
            <div className="show_details__detail">Country : {network.country.name}</div>
            : null
        }
      </div>
  );
};
