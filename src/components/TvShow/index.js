import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchShow} from "../../actions/shows";
import TvShow from "./TvShow";

const show = ({show}) => ({show});

@connect(show, {fetchShow})
export default class TvShowPage extends Component {

  componentDidMount() {
    this.props.fetchShow(this.props.match.params.name);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {show: {data}} = this.props;
    return (
        <div className="container">
          <div className="show">
            <div className="show__back-button" onClick={this.goBack}>
              <div className="show__back-button__icon">⬅</div>
              <div className="show__back-button__text">Go Back</div>
            </div>
          </div>
          <TvShow {...data}/>
        </div>
    );
  }
}
