export default function transferOwnership(props, tile, fromm, to) {
  // let self = this;
  // // console.log('self.state is:', self.state, 'and self.state[from] is:', self.state[from])
  // let fromCountry = self.state[fromm];
  // let toCountry = self.state[to];
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
    let state = store.getState().territories;
    let fromCountry = state[fromm];
    let toCountry = state[to];
    let fromIndex = fromCountry.indexOf(tile);
    let toIndex = toCountry.indexOf(tile);
    let newStateObject = {type: 'CHANGE_TILE'};
    fromCountry = fromCountry.slice(0, fromIndex).concat(fromCountry.slice(fromIndex + 1));
    toCountry.push(tile);
    newStateObject[fromm] = fromCountry;
    newStateObject[to] = toCountry;
    newStateObject['latestChange'] = tile;
    // self.setState(newStateObject);
    dispatch(newStateObject);
  }
}
