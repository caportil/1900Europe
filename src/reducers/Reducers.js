import { combineReducers } from 'redux';
import startingTerritories from './Territories.js';
import startingUnits from './Units.js';

const territoriesReducer = (state = startingTerritories, action) => {
  if (action.type === 'ADD_LIST') {
    state = state.concat([action.payload])
  }
  return state;
};

const unitsReducer = (state = startingUnits, action) => {
  if (action.type === 'ADD_LIST') {
    state = state.concat([action.payload])
  }
  return state;
};

export default combineReducers({
  territories: territoriesReducer,
  units: unitsReducer,
});
