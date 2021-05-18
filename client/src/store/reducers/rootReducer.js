import { combineReducers } from 'redux';
import newGameReducer from './newGameReducer';

const rootReducer = combineReducers({ newGameReducer });

export default rootReducer;
