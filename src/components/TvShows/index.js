import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchShows} from "../../actions/shows";

const shows = ({shows}) => ({shows});


@connect(shows, {fetchShows})
export default class TvShows extends Component {

  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    const { shows: { data } } = this.props;
    console.log(data);
    return (
        <div>
          {data.map((item, i) => <div key={i} >{JSON.stringify(item.show)} </div>)}
        </div>
    );
  }
};