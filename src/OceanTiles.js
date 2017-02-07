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
        src="http://imgur.com/XQQwTt6"
        class="NAO"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* MAO */}
      <Ocean
        src="http://imgur.com/P9EyDW5"
        class="MAO"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* NorwegianSea */}
      <Ocean
        src="http://imgur.com/a791muj"
        class="NorwegianSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* Tyrrhenian Sea */}
      <Ocean
        src="http://imgur.com/uYy6mMB"
        class="TyrrhenianSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* North Sea */}
      <Ocean
        src="http://imgur.com/2abMuYM"
        class="NorthSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* Ionian Sea */}
      <Ocean
        src="http://imgur.com/HGCwUbb"
        class="IonianSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* WesternMediterranean */}
      <Ocean
        src="http://imgur.com/ciY92Vq"
        class="WesternMediterranean"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* EasternMediterranean */}
      <Ocean
        src="http://imgur.com/PXBqdZ6"
        class="EasternMediterranean"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* GulfOfBothnia */}
      <Ocean
        src="http://imgur.com/KK3u8lx"
        class="GulfOfBothnia"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* EnglishChannel */}
      <Ocean
        src="http://imgur.com/NgYhqtK"
        class="EnglishChannel"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* HelgolandBight */}
      <Ocean
        src="http://imgur.com/jic0Xfj"
        class="HelgolandBight"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />        

      {/* Skagerrak */}
      <Ocean
        src="http://imgur.com/qF7hXmA"
        class="Skagerrak"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* IrishSea */}
      <Ocean
        src="http://imgur.com/P6x74Cq"
        class="IrishSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* BlackSea */}
      <Ocean
        src="http://imgur.com/roxuzTa"
        class="BlackSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />        

      {/* BarentsSea */}
      <Ocean
        src="http://imgur.com/hGEPqbA"
        class="BarentsSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* BalticSea */}
      <Ocean
        src="http://imgur.com/3DqQWum"
        class="BalticSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* GulfOfLyon */}
      <Ocean
        src="http://imgur.com/IOXCfY5"
        class="GulfOfLyon"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* AegeanSea */}
      <Ocean
        src="http://imgur.com/MlDkahJ"
        class="AegeanSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* AdriaticSea */}
      <Ocean
        src="http://imgur.com/mpdZd9N"
        class="AdriaticSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />        
    </div>
    )
  }
}

export default OceanTiles;

