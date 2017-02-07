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

{/* Germany */}
      <Land
        src="http://imgur.com/pkAGRda"
        class="Berlin"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/EIK4sK9"
        class="Kiel"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/fkNBPGk"
        class="Ruhr"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/G5fJC56"
        class="Munich"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/nZcE2vL"
        class="Silesia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/EeoFSgh"
        class="Prussia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

{/* France */}
      <Land
        src="http://imgur.com/hfuPaS2"
        class="Brest"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/Yzzw4Pw"
        class="Burgundy"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/lVObu1M"
        class="Gascony"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/esw58Kg"
        class="Marseilles"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/ju4CZn9"
        class="Paris"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/VPrnX4e"
        class="Picardy"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

{/* Italy */}
      <Land
        src="http://imgur.com/mipwq9s"
        class="Apulia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/rQ1vXCJ"
        class="Naples"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/BWQQ24b"
        class="Piemonte"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/9aVaLZQ"
        class="Rome"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/mcP2ZAM"
        class="Tuscany"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/U0Xg6Yl"
        class="Venice"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

{/* Austria */}
      <Land
        src="http://imgur.com/qYw5wGi"
        class="Bohemia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/7m7iXK3"
        class="Budapest"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/TyuqzCr"
        class="Galicia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/f9JWHfp"
        class="Trieste"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/wCVEhVT"
        class="Tyrolia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/7enOk7w"
        class="Vienna"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

{/* Russia */}
      <Land
        src="http://imgur.com/e8JPUD9"
        class="Finland"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/QB1Cgqv"
        class="Livonia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/wOi3tDj"
        class="Moscow"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/lMc99NQ"
        class="Ukraine"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/WXpnqF7"
        class="Warsaw"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/N0WTz6f"
        class="StPetersburg"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/rLMOhEj"
        class="Sevastopol"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

{/* Ottomans */}
      <Land
        src="http://imgur.com/hFgOrwO"
        class="Ankara"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/Hfpt5Pu"
        class="Armenia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/pagAyMp"
        class="Constantinople"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/yutrrED"
        class="Smyrna"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/RPWmhOS"
        class="Syria"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

{/* Neutral */}

      <Land
        src="http://imgur.com/FkxdHVy"
        class="Albania"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/HxQZrMp"
        class="Belgium"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/INrLmUh"
        class="Bulgaria"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/I4hg7CP"
        class="Denmark"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/zTqYXm2"
        class="Greece"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/JU8tm5p"
        class="Holland"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/jX3l2O7"
        class="Iceland"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/7kQ3itz"
        class="NorthAfrica"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/34f7cdo"
        class="Norway"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/D1Y8iJ2"
        class="Portugal"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/qxvFPrU"
        class="Romania"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/yEgs1L0"
        class="Serbia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/5cJLvc3"
        class="Spain"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/5QnkPdq"
        class="Sweden"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

      <Land
        src="http://imgur.com/TZPADte"
        class="Tunisia"
        occupiedLand={self.props.state.occupiedLand}
        state={self.props.state}
      />

    </div>
    )
  }
}

export default LandTiles;
