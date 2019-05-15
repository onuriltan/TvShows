import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchShow, removeShow} from "../../actions/shows";
import TvShow from "./TvShow";

const show = ({show}) => ({show});

@connect(show, {fetchShow, removeShow})
export default class TvShowPage extends Component {

  componentDidMount() {
    this.props.fetchShow(this.props.match.params.name);
  }
  goBack = () => {
    this.props.removeShow();
    this.props.history.goBack();
  };

  render() {
    const {show: {data}} = this.props;
    return (
        <div className="container">
          <TvShow data={data} goBack={this.goBack} />
        </div>
    );
  }
}
