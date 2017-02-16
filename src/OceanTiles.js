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
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* MAO */}
      <Ocean
        src="http://imgur.com/tlHGD7F"
        src2="http://imgur.com/P9EyDW5"
        class="MAO"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* NorwegianSea */}
      <Ocean
        src="http://imgur.com/v98F6Wg"
        src2="http://imgur.com/a791muj"
        class="NorwegianSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Tyrrhenian Sea */}
      <Ocean
        src="http://imgur.com/boGrbzW"
        src2="http://imgur.com/uYy6mMB"
        class="TyrrhenianSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* North Sea */}
      <Ocean
        src="http://imgur.com/kxT8PjX"
        src2="http://imgur.com/2abMuYM"
        class="NorthSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Ionian Sea */}
      <Ocean
        src="http://imgur.com/AXPuRCd"
        src2="http://imgur.com/HGCwUbb"
        class="IonianSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* WesternMediterranean */}
      <Ocean
        src="http://imgur.com/AwiR1BH"
        src2="http://imgur.com/ciY92Vq"
        class="WesternMediterranean"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EasternMediterranean */}
      <Ocean
        src="http://imgur.com/RtePfmD"
        src2="http://imgur.com/PXBqdZ6"
        class="EasternMediterranean"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfBothnia */}
      <Ocean
        src="http://imgur.com/WSqJsnI"
        src2="http://imgur.com/KK3u8lx"
        class="GulfOfBothnia"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* EnglishChannel */}
      <Ocean
        src="http://imgur.com/hec7BAX"
        src2="http://imgur.com/NgYhqtK"
        class="EnglishChannel"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* HelgolandBight */}
      <Ocean
        src="http://imgur.com/40qVi3u"
        src2="http://imgur.com/jic0Xfj"
        class="HelgolandBight"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* Skagerrak */}
      <Ocean
        src="http://imgur.com/2xrFZCG"
        src2="http://imgur.com/qF7hXmA"
        class="Skagerrak"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* Celtic Sea */}
      <Ocean
        src="http://imgur.com/Cruqvnh"
        src2="http://imgur.com/P6x74Cq"
        class="IrishSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BlackSea */}
      <Ocean
        src="http://imgur.com/ekrDFpD"
        src2="http://imgur.com/roxuzTa"
        class="BlackSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />        

      {/* BarentsSea */}
      <Ocean
        src="http://imgur.com/jCx3aWr"
        src2="http://imgur.com/hGEPqbA"
        class="BarentsSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* BalticSea */}
      <Ocean
        src="http://imgur.com/wqfAjMw"
        src2="http://imgur.com/3DqQWum"
        class="BalticSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* GulfOfLyon */}
      <Ocean
        src="http://imgur.com/frYwXGi"
        src2="http://imgur.com/IOXCfY5"
        class="GulfOfLyon"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
      />

      {/* AegeanSea */}
      <Ocean
        src="http://imgur.com/efGfcmi"
        src2="http://imgur.com/MlDkahJ"
        class="AegeanSea"
        left="LEFTLEFTLEFT"
        top="TOPTOPTOP"
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

