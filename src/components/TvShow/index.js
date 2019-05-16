import React, {Component} from 'react';
import {connect} from 'react-redux';
import TvShowHeader from "./TvShowHeader";
import TvShowDetails from "./TvShowDetails";
import {fetchShows} from "../../actions/shows";

const shows = ({shows}) => ({shows});

@connect(store => ({shows: store.shows }))
@connect(shows, {fetchShows})
export default class TvShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentShow: null
    }
  }

  findShow = () => {
    let theShow = this.props.shows.data.filter(show =>  show.show.name === this.props.match.params.name ? show : null )[0];
    this.setState({ currentShow : theShow});
  };

  componentDidMount() {
    if(this.props.shows.data.length === 0) {
      this.props.fetchShows();
    }else {
      this.findShow()
    }
  }
  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if(oldProps.shows.data !== newProps.shows.data) {
      this.findShow()
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    if(this.state.currentShow === null) return null;

    const {name, image, summary, network, rating, premiered, genres, language} = this.state.currentShow.show;

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


