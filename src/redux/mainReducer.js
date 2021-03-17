import { combineReducers } from 'redux';
import home from './reducers/homeReducer';

const combiner = combineReducers({
  home,
});

const mainReducer = (state, action) => combiner(state, action);

export default mainReducer;
