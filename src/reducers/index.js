import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export default combineReducers({
  people: charsReducer
});
