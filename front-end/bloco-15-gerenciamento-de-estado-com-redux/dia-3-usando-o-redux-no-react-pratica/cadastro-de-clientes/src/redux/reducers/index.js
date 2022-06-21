import customerReducer from './customerReducer'
import loginReducer from './loginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({customers: customerReducer, login: loginReducer})

export default rootReducer