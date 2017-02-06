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
        hue={self.props.hue}
        occupiedLand={self.props.occupiedLand}
      />

      <Land
        src="http://imgur.com/cmtZ64i"
        class="Wales"
        hue={self.props.hue}
        occupiedLand={self.props.occupiedLand}
      />

      <Land
        src="http://imgur.com/gAneh9I"
        class="York"
        hue={self.props.hue}
        occupiedLand={self.props.occupiedLand}
      />

      <Land
        src="http://imgur.com/mBtpoUn"
        class="Edinburgh"
        hue={self.props.hue}
        occupiedLand={self.props.occupiedLand}
      />

      <Land
        src="http://imgur.com/ZDCpX2O"
        class="Clyde"
        hue={self.props.hue}
        occupiedLand={self.props.occupiedLand}
      />

      <Land
        src="http://imgur.com/rikd5cu"
        class="Liverpool"
        hue={self.props.hue}
        occupiedLand={self.props.occupiedLand}
      />

      <Land
        src="http://imgur.com/Ubw82Yu"
        class="Ireland"
        hue={self.props.hue}
        occupiedLand={self.props.occupiedLand}
      />

    </div>
    )
  }
}

export default LandTiles;
