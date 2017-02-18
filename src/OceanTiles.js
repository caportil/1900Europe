import React, { Component } from 'react';
import Ocean from './Ocean.js';

class OceanTiles extends Component {
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
      {/* NAO */}
      <Ocean
        src="http://imgur.com/VTwVKb7"
        class="NAO"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* MAO */}
      <Ocean
        src="http://imgur.com/MTOmgVG"
        class="MAO"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* NorwegianSea */}
      <Ocean
        src="http://imgur.com/OLfTZsh"
        class="NorwegianSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Tyrrhenian Sea */}
      <Ocean
        src="http://imgur.com/UDy1JVC"
        class="TyrrhenianSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* North Sea */}
      <Ocean
        src="http://imgur.com/dWtWrPl"
        class="NorthSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Ionian Sea */}
      <Ocean
        src="http://imgur.com/PuoblhW"
        class="IonianSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* WesternMediterranean */}
      <Ocean
        src="http://imgur.com/rgpck1e"
        class="WesternMediterranean"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EasternMediterranean */}
      <Ocean
        src="http://imgur.com/uDOCMjP"
        class="EasternMediterranean"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfBothnia */}
      <Ocean
        src="http://imgur.com/XtJfiDb"
        class="GulfOfBothnia"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EnglishChannel */}
      <Ocean
        src="http://imgur.com/215VfTz"
        class="EnglishChannel"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* HelgolandBight */}
      <Ocean
        src="http://imgur.com/Ykm7ZuR"
        class="HelgolandBight"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* Skagerrak */}
      <Ocean
        src="http://imgur.com/C5WfBRZ"
        class="Skagerrak"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* IrishSea */}
      <Ocean
        src="http://imgur.com/umxZ1Jf"
        class="IrishSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BlackSea */}
      <Ocean
        src="http://imgur.com/nQVQa7y"
        class="BlackSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* BarentsSea */}
      <Ocean
        src="http://imgur.com/mUMp8gA"
        class="BarentsSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BalticSea */}
      <Ocean
        src="http://imgur.com/ZMFT0By"
        class="BalticSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfLyon */}
      <Ocean
        src="http://imgur.com/jac98qZ"
        class="GulfOfLyon"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* AegeanSea */}
      <Ocean
        src="http://imgur.com/ey8WS7t"
        class="AegeanSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* AdriaticSea */}
      <Ocean
        src="http://imgur.com/m0dZX8c"
        class="AdriaticSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        
    </div>
    )
  }
}

export default OceanTiles;

