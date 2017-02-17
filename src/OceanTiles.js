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
        src="http://imgur.com/rc8tfJH"
        src2="http://imgur.com/XQQwTt6"
        class="NAO"
        left={3}
        top={3}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* MAO */}
      <Ocean
        src="http://imgur.com/tlHGD7F"
        src2="http://imgur.com/P9EyDW5"
        class="MAO"
        left={3}
        top={308}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* NorwegianSea */}
      <Ocean
        src="http://imgur.com/v98F6Wg"
        src2="http://imgur.com/a791muj"
        class="NorwegianSea"
        left={229}
        top={3}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Tyrrhenian Sea */}
      <Ocean
        src="http://imgur.com/boGrbzW"
        src2="http://imgur.com/uYy6mMB"
        class="TyrrhenianSea"
        left={393}
        top={493}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* North Sea */}
      <Ocean
        src="http://imgur.com/kxT8PjX"
        src2="http://imgur.com/2abMuYM"
        class="NorthSea"
        left={306}
        top={169}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Ionian Sea */}
      <Ocean
        src="http://imgur.com/55REEea"
        src2="http://imgur.com/HGCwUbb"
        class="IonianSea"
        left={417}
        top={546}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* WesternMediterranean */}
      <Ocean
        src="http://imgur.com/nMqsjla"
        src2="http://imgur.com/ciY92Vq"
        class="WesternMediterranean"
        left={129}
        top={534}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EasternMediterranean */}
      <Ocean
        src="http://imgur.com/RtePfmD"
        src2="http://imgur.com/PXBqdZ6"
        class="EasternMediterranean"
        left={659}
        top={589}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfBothnia */}
      <Ocean
        src="http://imgur.com/WSqJsnI"
        src2="http://imgur.com/KK3u8lx"
        class="GulfOfBothnia"
        left={551}
        top={109}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EnglishChannel */}
      <Ocean
        src="http://imgur.com/hec7BAX"
        src2="http://imgur.com/NgYhqtK"
        class="EnglishChannel"
        left={192}
        top={332}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* HelgolandBight */}
      <Ocean
        src="http://imgur.com/40qVi3u"
        src2="http://imgur.com/jic0Xfj"
        class="HelgolandBight"
        left={397}
        top={270}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* Skagerrak */}
      <Ocean
        src="http://imgur.com/2xrFZCG"
        src2="http://imgur.com/qF7hXmA"
        class="Skagerrak"
        left={439}
        top={210}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Celtic Sea */}
      <Ocean
        src="http://imgur.com/Cruqvnh"
        src2="http://imgur.com/P6x74Cq"
        class="IrishSea"
        left={149}
        top={264}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BlackSea */}
      <Ocean
        src="http://imgur.com/ekrDFpD"
        src2="http://imgur.com/roxuzTa"
        class="BlackSea"
        left={716}
        top={406}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* BarentsSea */}
      <Ocean
        src="http://imgur.com/jCx3aWr"
        src2="http://imgur.com/hGEPqbA"
        class="BarentsSea"
        left={625}
        top={3}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BalticSea */}
      <Ocean
        src="http://imgur.com/wqfAjMw"
        src2="http://imgur.com/3DqQWum"
        class="BalticSea"
        left={472}
        top={243}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfLyon */}
      <Ocean
        src="http://imgur.com/frYwXGi"
        src2="http://imgur.com/IOXCfY5"
        class="GulfOfLyon"
        left={237}
        top={470}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* AegeanSea */}
      <Ocean
        src="http://imgur.com/efGfcmi"
        src2="http://imgur.com/MlDkahJ"
        class="AegeanSea"
        left={634}
        top={538}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* AdriaticSea */}
      <Ocean
        src="http://imgur.com/1NT7WQK"
        src2="http://imgur.com/mpdZd9N"
        class="AdriaticSea"
        left={466}
        top={454}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        
    </div>
    )
  }
}

export default OceanTiles;

