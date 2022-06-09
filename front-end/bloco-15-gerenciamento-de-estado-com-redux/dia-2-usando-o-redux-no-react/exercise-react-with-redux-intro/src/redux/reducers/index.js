// Neste arquivo você deverá combinar os seus reducers.
import { combineReducers } from 'redux';
import reducerOne from './exercise-one';
import reducerTwo from './exercise-two';

const rootReducer = combineReducers({ reducerOne, reducerTwo });

export default rootReducer;
