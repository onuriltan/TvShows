import {
  REQUEST_SHOWS,
  RECEIVE_SHOWS
} from "../actions/types";

const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SHOWS: {
      return { ...state };
    }
    case RECEIVE_SHOWS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
