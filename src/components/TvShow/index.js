import React, {Component} from 'react';
import {connect} from 'react-redux';
import TvShowHeader from "./TvShowHeader";
import TvShowDetails from "./TvShowDetails";
import {fetchShows} from "../../actions/shows";

function mapStateToProps(state, ownProps) {
  return { show: state.shows.data.filter(show =>  show.show.name === ownProps.match.params.name ? show : null )[0] };
}

@connect(mapStateToProps, {fetchShows})
export default class TvShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentShow: null
    }
  }
  componentDidMount() {
    if(this.props.show === undefined) {
      this.props.fetchShows();
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };


  render() {
    if(this.props.show === undefined) return null;

    const {name, image, summary, network, rating, premiered, genres, language} = this.props.show.show;

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


