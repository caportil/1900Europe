import { combineReducers } from 'redux';
import startingTerritories from './../components/Territories.js';
import startingUnits from './../components/Units.js';

const territoriesReducer = (state = startingTerritories, action) => {
  // if (action.type === 'ADD_LIST') {
  //   newState.concat([action.payload])
  // }
  const findOwnership = (state, tile) => {
    // let self = this;
    if (state.england.indexOf(tile) > -1) {
      console.log('england found!')
      return 'england';
    } else if (state.germany.indexOf(tile) > -1) {
      console.log('germany found!')
      return 'germany';
    } else if (state.france.indexOf(tile) > -1) {
      return 'france';
    } else if (state.italy.indexOf(tile) > -1) {
      return 'italy';
    } else if (state.austria.indexOf(tile) > -1) {
      return 'austria';
    } else if (state.russia.indexOf(tile) > -1) {
      return 'russia';
    } else if (state.ottomans.indexOf(tile) > -1) {
      return 'ottomans';
    } else {
      console.log('Nobody owns this tile!')
      return 'neutral';
    }
  }

  console.log('In territoriesReducer, action is:', action);
  if (action.type === 'LOAD_NEW_OWNER') {
    var newState = Object.assign({}, state, action.payload);

  } else if (action.type === 'CHANGE_TILE') {
    let tile = action.payload;
    var newState = Object.assign({}, state);
    let fromm = findOwnership(newState, tile);
    console.log('fromm is now:', fromm);
    let to = newState.newOwner;
    let fromCountry = newState[fromm];
    let toCountry = newState[to];
    let fromIndex = fromCountry.indexOf(tile);
    let toIndex = toCountry.indexOf(tile);
    // let newStateObject = {type: 'CHANGE_TILE', payload: {}};
    fromCountry = fromCountry.slice(0, fromIndex).concat(fromCountry.slice(fromIndex + 1));
    toCountry.push(tile);
    newState[fromm] = fromCountry;
    newState[to] = toCountry;
    newState.latestChange = tile;
  } else {
    var newState = state;
  }
  return newState;
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
