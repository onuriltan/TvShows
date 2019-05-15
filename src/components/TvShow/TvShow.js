import React from 'react';
import TvShowHeader from './TvShowHeader';
import TvShowDetails from './TvShowDetails';

export default ({data, goBack}) => {
  if (data.name === undefined) {
    return null
  }

  const {name, image, summary, network, rating, premiered, genres, language} = data;
  console.log(data)
  return (
      <div className="show_container">
        <TvShowHeader name={name} goBack={goBack} />
        <div className="show_container__main">
          <div className="show_container__main__img-container">
            <img className="show_container__main__img-container__img" src={image.original} alt={name}/>
          </div>
          <TvShowDetails network={network} rating={rating} premiered={premiered}
                         genres={genres} language={language} />
        </div>
        <div className="show_container__summary" dangerouslySetInnerHTML={{__html: summary}}/>

      </div>
  );
};
