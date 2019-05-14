import React from 'react';
import {Route} from 'react-router-dom';
import TvShows from "../components/TvShows";
import TvShow from "../components/TvShow";


export default () => {
  return (
      <div>
        <Route exact path="/" component={TvShows}/>
        <Route path="/:name" component={TvShow} />
      </div>
  );
};