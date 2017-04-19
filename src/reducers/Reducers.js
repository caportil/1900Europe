import { combineReducers } from 'redux';
import startingTerritories from './../components/Territories.js';
import startingUnits from './../components/Units.js';

const territoriesReducer = (state = startingTerritories, action) => {
  if (action.type === 'ADD_LIST') {
    state = state.concat([action.payload])
  }
  if (action.type === 'CHANGE_OWNER') {

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
