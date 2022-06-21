import { LOGIN_REQUEST } from '../actions'

const userLogin = (state = {}, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
      return {...state, ...action.payload}
      default: 
      return state
  }
}

export default userLogin