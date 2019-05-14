import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchShow} from "../../actions/shows";

const show = ({show}) => ({show});

@connect(show, {fetchShow})
export default class TvShow extends Component {

  componentDidMount() {
    this.props.fetchShow(this.props.match.params.name);
  }

  render() {
    const {show: {show}} = this.props;
    console.log(show)
    return (
        <div className="container">

        </div>
    );
  }
}