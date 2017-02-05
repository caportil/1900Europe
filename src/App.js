import React, { Component } from 'react';
import Ocean from './Ocean.js';
import Area from './Area.js';

class App extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
			occupied: [],
			hue: 240,
		}
	}

  toggleOccupiedOcean(tile) {
    let self = this;
    let index = self.state.occupied.indexOf(tile);
    let newOccupied = self.state.occupied; 
    if (index > -1) {
      newOccupied = newOccupied.slice(0, index).concat(newOccupied.slice(index + 1));
    } else {
      newOccupied.push(tile);
    }
    self.setState({occupied: newOccupied})
  }

  render() {
	let self = this;
  console.log('Current occupied ocean tiles are:', self.state.occupied)

    return (

    	<div onSubmit={(event) => {
    		event.preventDefault();
    		console.log('CommentText submitted! Body:' + document.getElementsByName('CommentText')[0].value);
    	}}>
      	<h1>Diplomacy 1900 Map</h1>
      	<form>Enter move orders: <input name="CommentText" />
      	<button>Submit</button>
      	</form>
      	<br />

        {/* Europe Map Background*/}
      	<img src="http://imgur.com/9ec1SWM.png" style={{position: 'absolute', left: '100px', top: '200px'}}/>

        {/* NWAO */}
        <Ocean
          src="http://imgur.com/XQQwTt6"
          class="NWAO"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* WAO */}
        <Ocean
          src="http://imgur.com/P9EyDW5"
          class="WAO"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* NAO */}
        <Ocean
          src="http://imgur.com/a791muj"
          class="NAO"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* Tyrrhenian Sea */}
        <Ocean
          src="http://imgur.com/uYy6mMB"
          class="TyrrhenianSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* North Sea */}
        <Ocean
          src="http://imgur.com/2abMuYM"
          class="NorthSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* Ionian Sea */}
        <Ocean
          src="http://imgur.com/HGCwUbb"
          class="IonianSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* GulfOfGibraltar */}
        <Ocean
          src="http://imgur.com/ciY92Vq"
          class="GulfOfGibraltar"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* GulfOfCyprus */}
        <Ocean
          src="http://imgur.com/PXBqdZ6"
          class="GulfOfCyprus"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* GulfOfBothnia */}
        <Ocean
          src="http://imgur.com/KK3u8lx"
          class="GulfOfBothnia"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* EnglishChannel */}
        <Ocean
          src="http://imgur.com/NgYhqtK"
          class="EnglishChannel"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* DutchSea */}
        <Ocean
          src="http://imgur.com/jic0Xfj"
          class="DutchSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />        

        {/* DenmarkStrait */}
        <Ocean
          src="http://imgur.com/qF7hXmA"
          class="DenmarkStrait"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* CelticSea */}
        <Ocean
          src="http://imgur.com/P6x74Cq"
          class="CelticSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* BlackSea */}
        <Ocean
          src="http://imgur.com/roxuzTa"
          class="BlackSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />        

        {/* BarentsSea */}
        <Ocean
          src="http://imgur.com/hGEPqbA"
          class="BarentsSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* BalticSea */}
        <Ocean
          src="http://imgur.com/3DqQWum"
          class="BalticSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* BalearicSea */}
        <Ocean
          src="http://imgur.com/IOXCfY5"
          class="BalearicSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* AegeanSea */}
        <Ocean
          src="http://imgur.com/VuNskgw"
          class="AegeanSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />

        {/* AdriaticSea */}
        <Ocean
          src="http://imgur.com/mpdZd9N"
          class="AdriaticSea"
          hue={self.state.hue}
          occupied={self.state.occupied}
        />        




      {/* Combined Map */}
        <map name="combinedMap">

          {/* NWAO */}
          <Area
            class="NWAO"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="0,0,0,311,35,305,94,306,144,319,189,293,181,285,180,278,206,268,199,256,206,244,215,243,246,236,266,244,265,265,292,276,287,260,268,257,279,244,274,233,277,218,264,201,286,189,283,203,301,195,309,122,274,67,222,67,192,45,208,39,196,23,232,27,211,16,231,8,226,0"
          />

          {/* NAO */}
          <Area
            class="NAO"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="234,5,239,26,283,33,292,54,280,71,323,128,301,157,308,194,330,191,352,173,372,175,421,169,501,119,555,59,573,50,599,32,616,26,623,5"
          />

          {/* WAO */}
          <Area
            class="WAO"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="0,315,1,641,13,641,28,615,43,603,87,598,122,572,118,546,75,535,87,512,83,494,112,470,116,434,140,427,235,455,256,419,231,375,226,365,124,318,84,307"
          />

          {/* Tyrrhenian Sea */}
          <Area
            class="TyrrhenianSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="424,494,408,521,413,557,398,567,401,594,426,597,458,582,494,589,514,581,515,562"
          />

          {/* North Sea */}
          <Area
            class="NorthSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="352,183,309,211,330,220,311,241,321,273,329,300,343,309,328,331,371,338,380,319,398,321,403,283,435,267,439,244,420,229,431,214,419,199,431,171,394,171"
          />
          
          {/* Ionian Sea */}
          <Area
            class="IonianSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="444,595,417,617,435,642,653,642,652,627,621,615,610,596,581,555,558,556,542,550,533,563,541,571,519,591,506,591,504,613,476,600,449,595"
          />
          
          {/* GulfOfGibraltar */}
          <Area
            class="GulfOfGibraltar"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="132,566,145,586,189,599,214,587,302,589,383,596,394,576,386,546,328,538,294,547,280,542,264,552,245,546,223,556,193,569,165,562,136,566"
          />
          
          {/* GulfOfCyprus */}
          <Area
            class="GulfOfCyprus"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="658,643,882,642,873,606,879,590,851,595,828,608,807,607,789,604,764,614,751,607,708,633,697,637,665,638,660,637"
          />
          
          {/* GulfOfBothnia */}
          <Area
            class="GulfOfBothnia"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="614,108,601,123,600,137,579,159,557,165,560,195,578,212,563,229,552,241,596,258,616,250,636,261,642,241,625,224,645,213,670,217,697,206,676,195,625,206,604,197,599,164,610,149,633,128,634,114"
          />
          
          {/* EnglishChannel */}
          <Area
            class="EnglishChannel"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="190,347,226,362,248,357,271,366,274,353,298,363,316,355,326,344,295,336,282,342,261,331,253,334,242,333,230,339,225,339,191,346,193,342"
          />
          
          {/* DutchSea */}
          <Area
            class="DutchSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="431,268,400,287,398,307,417,313,429,307,436,310,443,300,441,283,435,267"
          />
          
          {/* DenmarkStrait */}
          <Area
            class="DenmarkStrait"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="479,216,441,238,441,250,454,250,463,247,475,240,470,256,480,263,480,266,496,270"
          />
          
          {/* CelticSea */}
          <Area
            class="CelticSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="255,270,239,293,223,295,202,300,192,297,153,321,188,343,226,335,232,327,241,324,253,316,265,318,249,310,248,301,260,298,263,295,258,288,267,286,273,284,289,286,290,279,268,266,253,264"
          />
          
          {/* BlackSea */}
          <Area
            class="BlackSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="753,431,742,463,728,468,731,487,714,499,734,529,771,526,798,510,838,505,882,511,921,501,938,489,933,476,900,463,882,455,850,448,867,432,857,421,871,415,865,403,814,429,829,442,840,438,841,450,823,455,811,464,799,464,795,453,784,453,793,441,779,437,764,429,755,429"
          />
          
          {/* BarentsSea */}
          <Area
            class="BarentsSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="624,2,627,17,641,24,656,21,676,28,666,38,685,36,696,40,719,45,764,54,774,73,760,90,708,91,727,113,761,126,736,110,747,105,787,111,771,95,787,74,799,78,796,65,788,53,775,39,793,34,804,37,809,41,806,45,816,55,825,50,830,32,843,20,848,5,853,11,854,29,862,47,859,38,861,26,861,14,874,3"
          />
          
          {/* BalticSea */}
          <Area
            class="BalticSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="549,244,540,281,517,284,507,291,491,286,479,300,474,310,499,306,518,315,529,311,558,299,577,301,591,310,587,296,598,289,602,262,583,252,574,251,569,263,566,247,550,244"
          />
          
          {/* BalearicSea */}
          <Area
            class="BalearicSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="314,476,314,499,292,506,268,511,242,528,252,550,275,539,301,528,316,535,360,531,384,540,387,529,403,524,400,502,419,495,427,487,417,470,392,479,375,484,362,488,343,480,331,474"
          />
          
          {/* AegeanSea */}
          <Area
            class="AegeanSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="675,543,665,550,650,557,631,542,647,571,669,586,663,592,652,591,646,606,655,631,675,630,693,633,713,629,725,620,740,611,722,605,719,592,702,585,696,572,709,574,703,563,692,559,693,544,675,538,668,539,658,543,667,550"
          />
          
          {/* AdriaticSea */}
          <Area
            class="AdriaticSea"
            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
            coords="464,458,476,484,490,491,499,514,520,519,526,527,567,557,581,540,573,522,550,513,543,503,527,500,509,471,494,470,483,464,488,455,471,458"
          />
          

        </map>
      </div>
    );
  }
}


export default App;