import React from 'react';
import { Route } from 'react-router-dom';
import TvShows from "../components/TvShows";


export default () => {
  return(
    <div>
      <Route exact path="/" component={TvShows} />
    </div>
  );
};