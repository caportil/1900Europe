export default {
  transferOwnership: (tile) => {
    console.log('Running transferOwnership... tile parameter is:', tile);
    // let self = this;
    // // console.log('state is:', state, 'and state[from] is:', state[from])
    // let fromCountry = state[fromm];
    // let toCountry = state[to];
    // // console.log('transferOwnership invoked! fromCountry is:', fromCountry)
    // let fromIndex = fromCountry.indexOf(tile);
    // let toIndex = toCountry.indexOf(tile);
    // let newStateObject = {};
    // fromCountry = fromCountry.slice(0, fromIndex).concat(fromCountry.slice(fromIndex + 1));
    // toCountry.push(tile);
    // newStateObject[fromm] = fromCountry;
    // newStateObject[to] = toCountry;
    // newStateObject['latestChange'] = tile;
    // self.setState(newStateObject);

    return function(dispatch) {
      console.log('Running callback function(dispatch) within transferOwnership...');
      // let state = store.getState().territories;
      // console.log('After running store.getState(), state is now:', state);
      // let fromm = findOwnership(tile);
      // let to = state.newOwner;
      // let fromCountry = state[fromm];
      // let toCountry = state[to];
      // let fromIndex = fromCountry.indexOf(tile);
      // let toIndex = toCountry.indexOf(tile);
      // let newStateObject = {type: 'CHANGE_TILE', payload: {}};
      // fromCountry = fromCountry.slice(0, fromIndex).concat(fromCountry.slice(fromIndex + 1));
      // toCountry.push(tile);
      // newStateObject.payload[fromm] = fromCountry;
      // newStateObject.payload[to] = toCountry;
      // newStateObject.payload.latestChange = tile;
      // self.setState(newStateObject);
      // console.log('Within TerritoriesActions.transferOwnership, newStateObject is:', newStateObject);


      // dispatch(newStateObject);
      dispatch({
        type: 'CHANGE_TILE',
        payload: tile
      })
    }
  },
  loadNewOwner: (country) => {
    console.log('Running loadNewOwner... country parameter is:', country);
    return function(dispatch) {
      dispatch({
        type: 'LOAD_NEW_OWNER',
        payload: {newOwner: country}
      })
    }
  }
}
