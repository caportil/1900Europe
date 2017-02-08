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
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* MAO */}
      <Ocean
        src="http://imgur.com/P9EyDW5"
        class="MAO"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* NorwegianSea */}
      <Ocean
        src="http://imgur.com/a791muj"
        class="NorwegianSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Tyrrhenian Sea */}
      <Ocean
        src="http://imgur.com/uYy6mMB"
        class="TyrrhenianSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* North Sea */}
      <Ocean
        src="http://imgur.com/2abMuYM"
        class="NorthSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Ionian Sea */}
      <Ocean
        src="http://imgur.com/HGCwUbb"
        class="IonianSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* WesternMediterranean */}
      <Ocean
        src="http://imgur.com/ciY92Vq"
        class="WesternMediterranean"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EasternMediterranean */}
      <Ocean
        src="http://imgur.com/PXBqdZ6"
        class="EasternMediterranean"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfBothnia */}
      <Ocean
        src="http://imgur.com/KK3u8lx"
        class="GulfOfBothnia"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EnglishChannel */}
      <Ocean
        src="http://imgur.com/NgYhqtK"
        class="EnglishChannel"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* HelgolandBight */}
      <Ocean
        src="http://imgur.com/jic0Xfj"
        class="HelgolandBight"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* Skagerrak */}
      <Ocean
        src="http://imgur.com/qF7hXmA"
        class="Skagerrak"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* IrishSea */}
      <Ocean
        src="http://imgur.com/P6x74Cq"
        class="IrishSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BlackSea */}
      <Ocean
        src="http://imgur.com/roxuzTa"
        class="BlackSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* BarentsSea */}
      <Ocean
        src="http://imgur.com/hGEPqbA"
        class="BarentsSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BalticSea */}
      <Ocean
        src="http://imgur.com/3DqQWum"
        class="BalticSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfLyon */}
      <Ocean
        src="http://imgur.com/IOXCfY5"
        class="GulfOfLyon"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* AegeanSea */}
      <Ocean
        src="http://imgur.com/MlDkahJ"
        class="AegeanSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* AdriaticSea */}
      <Ocean
        src="http://imgur.com/mpdZd9N"
        class="AdriaticSea"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        
    </div>
    )
  }
}

export default OceanTiles;

