import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchShow, removeShow} from "../../actions/shows";
import TvShowHeader from "./TvShowHeader";
import TvShowDetails from "./TvShowDetails";

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
    const {name, image, summary, network, rating, premiered, genres, language} = this.props.show.data;
    console.log(this.props.show.data)
    if (this.props.show.data.name === undefined) {
      return null
    }
    return (
        <div className="container">
          <div className="show_container">
            <TvShowHeader name={name} goBack={this.goBack} />
            <div className="show_container__main">
              <div className="show_container__main__img-container">
                <img className="show_container__main__img-container__img" src={image.original} alt={name}/>
              </div>
              <TvShowDetails network={network} rating={rating} premiered={premiered}
                             genres={genres} language={language} />
            </div>
            <div className="show_container__summary" dangerouslySetInnerHTML={{__html: summary}}/>
          </div>
        </div>
    );
  }
}
