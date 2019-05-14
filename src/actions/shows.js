import axios from 'axios';

import {
  ROOT,
  REQUEST_SHOWS,
  RECEIVE_SHOWS
} from "./types";


export const fetchShows = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_SHOWS });
    const res = await axios.get(`${ROOT}/shows?q=batman`);
    dispatch({ type: RECEIVE_SHOWS, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_SHOWS, payload: [] });
  }
};

