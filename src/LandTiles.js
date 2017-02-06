import React, { Component } from 'react';
import Land from './Land.js';

class LandTiles extends Component {
  constructor(props) {
    super(props);
    let self = this;
    this.state = {
    }
  }

  render() {
  let self = this;
  return (
    <div>

      {/* England */}
      <Land
        src="http://imgur.com/HOM3XYY"
        class="London"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/cmtZ64i"
        class="Wales"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/gAneh9I"
        class="York"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/mBtpoUn"
        class="Edinburgh"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/ZDCpX2O"
        class="Clyde"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/rikd5cu"
        class="Liverpool"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/Ubw82Yu"
        class="Ireland"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

    </div>
    )
  }
}

export default LandTiles;
