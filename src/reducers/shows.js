import {
  REQUEST_SHOWS,
  RECEIVE_SHOWS
} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SHOWS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_SHOWS: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};