import { SAVE_USER } from '../actions'

const INITIAL_STATE = {clients: []}

const customerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SAVE_USER:
      return {...state, clients: [...state.clients, action.payload]}
      default:
        return state
  }
}

export default customerReducer