import { LOGIN_REQUEST } from '../actions/index'

const INITIAL_STATE = { isLogged: false}

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {...state, ...action.payload}
      default:
        return state
  }
}

export default loginReducer