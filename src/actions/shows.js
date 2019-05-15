import axios from 'axios';

import {
  SHOWS_URL,
  SHOW_URL,
  REQUEST_SHOWS,
  RECEIVE_SHOWS,
  REQUEST_SHOW,
  RECEIVE_SHOW,
  REMOVE_SHOW
} from "./types";


export const fetchShows = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_SHOWS });
    const res = await axios.get(`${SHOWS_URL}/shows?q=batman`);
    dispatch({ type: RECEIVE_SHOWS, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_SHOWS, payload: [] });
  }
};

export const fetchShow = name => async dispatch => {
  try {
    dispatch({ type: REQUEST_SHOW });
    const res = await axios.get(`${SHOW_URL}?q=${name}`);
    dispatch({ type: RECEIVE_SHOW, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_SHOW, payload: {} });
  }
};

export const removeShow = () => async dispatch => {
    dispatch({ type: REMOVE_SHOW, payload: {} });
};

