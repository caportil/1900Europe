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
      {/* NWAO */}
      <Ocean
        src="http://imgur.com/XQQwTt6"
        class="NWAO"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* WAO */}
      <Ocean
        src="http://imgur.com/P9EyDW5"
        class="WAO"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* NAO */}
      <Ocean
        src="http://imgur.com/a791muj"
        class="NAO"
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

      {/* GulfOfGibraltar */}
      <Ocean
        src="http://imgur.com/ciY92Vq"
        class="GulfOfGibraltar"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* GulfOfCyprus */}
      <Ocean
        src="http://imgur.com/PXBqdZ6"
        class="GulfOfCyprus"
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

      {/* DutchSea */}
      <Ocean
        src="http://imgur.com/jic0Xfj"
        class="DutchSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />        

      {/* DenmarkStrait */}
      <Ocean
        src="http://imgur.com/qF7hXmA"
        class="DenmarkStrait"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* CelticSea */}
      <Ocean
        src="http://imgur.com/P6x74Cq"
        class="CelticSea"
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

      {/* BalearicSea */}
      <Ocean
        src="http://imgur.com/IOXCfY5"
        class="BalearicSea"
        hue={self.props.hue}
        occupiedOcean={self.props.occupiedOcean}
      />

      {/* AegeanSea */}
      <Ocean
        src="http://imgur.com/VuNskgw"
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

