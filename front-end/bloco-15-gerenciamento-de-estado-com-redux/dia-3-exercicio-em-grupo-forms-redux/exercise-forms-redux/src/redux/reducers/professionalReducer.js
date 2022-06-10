import { PROFESSIONAL_ACTION } from '../actions/action';

const INITIAL_STATE = {};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_ACTION:
    return { professionalData: action.payload };
  default:
    return state;
  }
};

export default professionalReducer;
