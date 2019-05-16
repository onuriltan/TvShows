import axios from 'axios';

import {
  SHOWS_URL,
  REQUEST_SHOWS,
  RECEIVE_SHOWS,
} from "./types";


export const fetchShows = () => async dispatch => {
  try {
    dispatch({type: REQUEST_SHOWS});
    const res = await axios.get(`${SHOWS_URL}/shows?q=batman`);
    dispatch({type: RECEIVE_SHOWS, payload: res.data});
  } catch (e) {
    console.log(e);
    dispatch({type: RECEIVE_SHOWS, payload: []});
  }
};
