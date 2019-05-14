import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchShows} from "../../actions/shows";
import TvShow from './TvShow.js';

const shows = ({shows}) => ({shows});

@connect(shows, {fetchShows})
export default class TvShows extends Component {

  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    const {shows: {data}} = this.props;
    console.log(data);
    return (
        <div className="container">
          <div className="shows">
            <div className="shows__title">
              Batman TV Shows
            </div>
            <div className="shows__items">
              {data.map((show, i) =>
                  <TvShow key={i} {...show}/>
              )}
            </div>

          </div>
        </div>
    );
  }
};