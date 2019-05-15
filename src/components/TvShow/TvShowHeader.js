import React from 'react';

export default ({name, goBack}) => {
  return (
      <div className="show_header">
        <div className="show_header__back-button" onClick={goBack}>
          <div className="show_header__back-button__icon">⬅</div>
          <div className="show_header__back-button__text">Go Back</div>
        </div>
        <div className="show_header__name">{name}</div>
      </div>
  );
};
