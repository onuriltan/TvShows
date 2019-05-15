import TvShows from "../components/TvShows";
import TvShow from "../components/TvShow";

export default [
  {
    component: TvShows,
    path: '/',
    exact: true
  },
  {
    component: TvShow,
    path: '/:name'
  }
];