import { PERSONAL_ACTION } from '../actions/action';

const INITIAL_STATE = {};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_ACTION:
    return { personalData: action.payload };
  default:
    return state;
  }
};

export default personalReducer;
