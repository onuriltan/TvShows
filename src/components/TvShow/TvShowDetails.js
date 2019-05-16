import React from 'react';

export default ({network, rating, premiered, genres, language}) => {
  return (
      <div className="show_details">
        { premiered
            ?
            <div className="show_details__detail">
              <b style={{'textTransform': 'uppercase'}}>Premiered: </b> {premiered}
            </div>
            : null
        }
        { genres
            ?
            <div className="show_details__detail">
              <b style={{'textTransform': 'uppercase'}}>Genres : </b>{genres.map((genre, i) =>
                i + 1 === genres.length ? genre : genre + ", "
            )}
            </div>
            : null
        }
        { language
            ?
            <div className="show_details__detail"><b style={{'textTransform': 'uppercase'}}>Language :</b> {language}</div>
            : null
        }
        { rating.average !== undefined && rating.average !== null
            ?
            <div className="show_details__detail"><b style={{'textTransform': 'uppercase'}}>Rating : </b>{rating.average}</div>
            : null
        }
        { network !== undefined && network !== null
            ?
            <div className="show_details__detail"><b style={{'textTransform': 'uppercase'}}>Country : </b>{network.country.name}</div>
            : null
        }
      </div>
  );
};
