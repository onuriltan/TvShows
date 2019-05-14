import {
  REQUEST_SHOW,
  RECEIVE_SHOW
} from "../actions/types";

const INITIAL_STATE = {
  show: {}
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_SHOW: {
      return { ...state };
    }
    case RECEIVE_SHOW: {
      return { ...state, show: action.payload };
    }
    default: return state;
  }
};