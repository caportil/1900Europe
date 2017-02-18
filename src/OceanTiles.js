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
<<<<<<< HEAD
        src="http://imgur.com/rc8tfJH"
        src2="http://imgur.com/XQQwTt6"
=======
        src="http://imgur.com/VTwVKb7"
>>>>>>> Complete converting ocean tiles to sprites
        class="NAO"
        left={3}
        top={3}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="0,0,0,311,35,305,94,306,144,319,189,293,181,285,180,278,206,268,199,256,206,244,215,243,246,236,266,244,265,265,292,276,287,260,268,257,279,244,274,233,277,218,264,201,286,189,283,203,301,195,309,122,274,67,222,67,192,45,208,39,196,23,232,27,211,16,231,8,226,0"
        coords2="1,3,1,306,72,303,121,311,144,311,185,291,180,276,205,265,193,245,207,242,248,231,258,241,260,259,286,274,286,260,266,258,276,242,259,237,273,221,267,213,262,197,280,185,278,200,298,194,297,162,310,122,294,103,279,77,271,66,220,67,207,55,194,47,193,41,207,37,207,31,192,21,201,21,219,28,219,25,208,16,206,11,217,3,225,9,220,1"
      />

      {/* MAO */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/tlHGD7F"
        src2="http://imgur.com/P9EyDW5"
=======
        src="http://imgur.com/MTOmgVG"
>>>>>>> Complete converting ocean tiles to sprites
        class="MAO"
        left={3}
        top={308}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="0,315,1,641,13,641,28,615,43,603,87,598,122,572,118,546,75,535,87,512,83,494,112,470,116,434,140,427,235,455,256,419,231,375,226,365,124,318,84,307"
        coords2="12,328,13,333,17,317,47,292,77,293,112,277,122,262,114,235,75,227,89,203,74,190,105,171,118,139,122,120,146,120,233,148,257,103,221,64,191,47,192,42,118,5,55,0,24,3,0,7,0,330"
      />

      {/* NorwegianSea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/v98F6Wg"
        src2="http://imgur.com/a791muj"
=======
        src="http://imgur.com/OLfTZsh"
>>>>>>> Complete converting ocean tiles to sprites
        class="NorwegianSea"
        left={229}
        top={3}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="234,5,239,26,283,33,292,54,280,71,323,128,301,157,308,194,330,191,352,173,372,175,421,169,501,119,555,59,573,50,599,32,616,26,623,5"
        coords2="3,1,8,12,9,23,34,28,58,34,62,54,50,67,92,129,71,158,76,182,84,192,108,180,119,170,133,167,142,175,196,165,256,136,276,112,325,70,338,47,348,46,371,31,377,17,389,27,394,1"
      />

      {/* Tyrrhenian Sea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/boGrbzW"
        src2="http://imgur.com/uYy6mMB"
=======
        src="http://imgur.com/UDy1JVC"
>>>>>>> Complete converting ocean tiles to sprites
        class="TyrrhenianSea"
        left={393}
        top={493}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="424,494,408,521,413,557,398,567,401,594,426,597,458,582,494,589,514,581,515,562"
        coords2="24,1,20,29,24,52,17,72,7,72,5,96,24,102,19,108,41,101,70,88,88,94,117,85,122,71,114,52" 
      />

      {/* North Sea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/kxT8PjX"
        src2="http://imgur.com/2abMuYM"
=======
        src="http://imgur.com/dWtWrPl"
>>>>>>> Complete converting ocean tiles to sprites
        class="NorthSea"
        left={306}
        top={169}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="352,183,309,211,330,220,311,241,321,273,329,300,343,309,328,331,371,338,380,319,398,321,403,283,435,267,439,244,420,229,431,214,419,199,431,171,394,171"
        coords2="113,1,51,13,19,22,24,33,2,40,28,48,12,65,17,73,12,88,15,102,22,112,18,130,32,138,34,145,26,159,25,166,43,167,65,163,72,156,84,143,84,156,90,137,102,122,121,103,131,104,134,77,126,67,113,58,117,43,125,42,111,38,118,26,127,7"
      />

      {/* Ionian Sea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/55REEea"
        src2="http://imgur.com/HGCwUbb"
=======
        src="http://imgur.com/PuoblhW"
>>>>>>> Complete converting ocean tiles to sprites
        class="IonianSea"
        left={417}
        top={546}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="444,595,417,617,435,642,653,642,652,627,621,615,610,596,581,555,558,556,542,550,533,563,541,571,519,591,506,591,504,613,476,600,449,595"
        coords2="238,95,215,67,195,56,189,41,164,12,146,11,126,4,123,24,83,65,30,46,0,67,19,95"
      />

      {/* WesternMediterranean */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/nMqsjla"
        src2="http://imgur.com/ciY92Vq"
=======
        src="http://imgur.com/rgpck1e"
>>>>>>> Complete converting ocean tiles to sprites
        class="WesternMediterranean"
        left={129}
        top={534}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="132,566,145,586,189,599,214,587,302,589,383,596,394,576,386,546,328,538,294,547,280,542,264,552,245,546,223,556,193,569,165,562,136,566"
        coords2="3,31,33,54,66,60,84,50,186,52,260,61,265,40,258,11,198,4,156,6,112,10,75,26,55,35,35,29,4,28"
      />

      {/* EasternMediterranean */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/RtePfmD"
        src2="http://imgur.com/PXBqdZ6"
=======
        src="http://imgur.com/uDOCMjP"
>>>>>>> Complete converting ocean tiles to sprites
        class="EasternMediterranean"
        left={659}
        top={589}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="658,643,882,642,873,606,879,590,851,595,828,608,807,607,789,604,764,614,751,607,708,633,697,637,665,638,660,637"
        coords2="0,50,20,51,43,48,62,39,91,22,113,26,128,13,157,23,186,13,195,5,208,12,219,0,209,12,221,39,220,52,81,52"
      />

      {/* GulfOfBothnia */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/WSqJsnI"
        src2="http://imgur.com/KK3u8lx"
=======
        src="http://imgur.com/XtJfiDb"
>>>>>>> Complete converting ocean tiles to sprites
        class="GulfOfBothnia"
        left={551}
        top={109}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="614,108,601,123,600,137,579,159,557,165,560,195,578,212,563,229,552,241,596,258,616,250,636,261,642,241,625,224,645,213,670,217,697,206,676,195,625,206,604,197,599,164,610,149,633,128,634,114"
        coords2="63,3,46,28,17,55,11,83,22,99,3,129,50,146,67,141,86,149,91,133,75,128,63,134,64,117,69,115,78,127,80,117,100,105,120,111,133,100,143,95,124,90,93,95,76,100,65,103,66,98,51,90,45,48,66,35,84,21,80,3"
      />

      {/* EnglishChannel */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/hec7BAX"
        src2="http://imgur.com/NgYhqtK"
=======
        src="http://imgur.com/215VfTz"
>>>>>>> Complete converting ocean tiles to sprites
        class="EnglishChannel"
        left={192}
        top={332}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="190,347,226,362,248,357,271,366,274,353,298,363,316,355,326,344,295,336,282,342,261,331,253,334,242,333,230,339,225,339,191,346,193,342"
        coords2="2,11,34,30,53,26,78,35,80,18,93,24,112,32,118,26,138,16,136,8,102,3,94,8,75,1,64,6,45,1,37,6"
      />

      {/* HelgolandBight */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/40qVi3u"
        src2="http://imgur.com/jic0Xfj"
=======
        src="http://imgur.com/Ykm7ZuR"
>>>>>>> Complete converting ocean tiles to sprites
        class="HelgolandBight"
        left={397}
        top={270}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="431,268,400,287,398,307,417,313,429,307,436,310,443,300,441,283,435,267"
        coords2="30,0,5,23,2,39,17,42,27,35,37,38,46,33,44,13,38,3"
      />        

      {/* Skagerrak */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/2xrFZCG"
        src2="http://imgur.com/qF7hXmA"
=======
        src="http://imgur.com/C5WfBRZ"
>>>>>>> Complete converting ocean tiles to sprites
        class="Skagerrak"
        left={439}
        top={210}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="479,216,441,238,441,250,454,250,463,247,475,240,470,256,480,263,480,266,496,270"
        coords2="39,1,37,9,28,11,1,26,4,39,16,41,40,30,40,40,30,49,41,55,56,61"
      />

      {/* Celtic Sea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/Cruqvnh"
        src2="http://imgur.com/P6x74Cq"
=======
        src="http://imgur.com/umxZ1Jf"
>>>>>>> Complete converting ocean tiles to sprites
        class="IrishSea"
        left={149}
        top={264}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="255,270,239,293,223,295,202,300,192,297,153,321,188,343,226,335,232,327,241,324,253,316,265,318,249,310,248,301,260,298,263,295,258,288,267,286,273,284,289,286,290,279,268,266,253,264"
        coords2="1,55,41,78,71,70,114,53,97,41,114,34,110,25,138,20,104,0,82,35,54,29"
      />

      {/* BlackSea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/ekrDFpD"
        src2="http://imgur.com/roxuzTa"
=======
        src="http://imgur.com/nQVQa7y"
>>>>>>> Complete converting ocean tiles to sprites
        class="BlackSea"
        left={716}
        top={406}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="753,431,742,463,728,468,731,487,714,499,734,529,771,526,798,510,838,505,882,511,921,501,938,489,933,476,900,463,882,455,850,448,867,432,857,421,871,415,865,403,814,429,829,442,840,438,841,450,823,455,811,464,799,464,795,453,784,453,793,441,779,437,764,429,755,429"
        coords2="38,28,2,102,23,117,101,102,194,101,223,76,145,44,135,33,147,23,139,12,155,5,134,5,110,25,96,22,117,37,126,32,125,39,104,50,93,57,77,55,78,49,66,44,78,31,62,29,47,21"
      />        

      {/* BarentsSea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/jCx3aWr"
        src2="http://imgur.com/hGEPqbA"
=======
        src="http://imgur.com/mUMp8gA"
>>>>>>> Complete converting ocean tiles to sprites
        class="BarentsSea"
        left={625}
        top={3}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="624,2,627,17,641,24,656,21,676,28,666,38,685,36,696,40,719,45,764,54,774,73,760,90,708,91,727,113,761,126,736,110,747,105,787,111,771,95,787,74,799,78,796,65,788,53,775,39,793,34,804,37,809,41,806,45,816,55,825,50,830,32,843,20,848,5,853,11,854,29,862,47,859,38,861,26,861,14,874,3"
        coords2="0,2,1,19,12,21,21,16,52,27,39,35,53,31,63,35,64,39,86,37,151,51,147,67,136,83,111,89,86,86,100,98,102,108,133,122,119,107,111,103,115,98,158,108,149,90,161,74,175,71,174,59,168,59,161,43,157,32,174,28,186,34,180,46,196,52,200,42,209,25,213,18,220,21,225,2,231,16,225,28,233,38,241,45,236,29,242,12,249,0"
      />

      {/* BalticSea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/wqfAjMw"
        src2="http://imgur.com/3DqQWum"
=======
        src="http://imgur.com/ZMFT0By"
>>>>>>> Complete converting ocean tiles to sprites
        class="BalticSea"
        left={472}
        top={243}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="549,244,540,281,517,284,507,291,491,286,479,300,474,310,499,306,518,315,529,311,558,299,577,301,591,310,587,296,598,289,602,262,583,252,574,251,569,263,566,247,550,244"
        coords2="77,1,68,33,47,37,46,41,41,48,23,45,13,53,4,60,30,66,49,69,58,63,82,60,94,58,118,66,116,58,130,41,130,19,109,8,95,20,95,8"
      />

      {/* GulfOfLyon */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/frYwXGi"
        src2="http://imgur.com/IOXCfY5"
=======
        src="http://imgur.com/jac98qZ"
>>>>>>> Complete converting ocean tiles to sprites
        class="GulfOfLyon"
        left={237}
        top={470}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="314,476,314,499,292,506,268,511,242,528,252,550,275,539,301,528,316,535,360,531,384,540,387,529,403,524,400,502,419,495,427,487,417,470,392,479,375,484,362,488,343,480,331,474"
        coords2="1,64,22,73,36,67,55,61,71,66,81,63,125,62,152,71,153,61,170,53,162,30,190,26,176,5,137,13,122,15,105,8,91,6,83,10,76,29,59,32,41,36,23,46"
      />

      {/* AegeanSea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/efGfcmi"
        src2="http://imgur.com/MlDkahJ"
=======
        src="http://imgur.com/ey8WS7t"
>>>>>>> Complete converting ocean tiles to sprites
        class="AegeanSea"
        left={634}
        top={538}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="675,543,665,550,650,557,631,542,647,571,669,586,663,592,652,591,646,606,655,631,675,630,693,633,713,629,725,620,740,611,722,605,719,592,702,585,696,572,709,574,703,563,692,559,693,544,675,538,668,539,658,543,667,550"
        coords2="38,7,16,15,2,11,11,28,13,40,33,45,28,52,14,54,11,64,17,85,38,92,77,93,86,84,106,70,88,68,79,49,61,45,60,36,75,38,70,22,61,23,60,6,49,0,38,0"
      />

      {/* AdriaticSea */}
      <Ocean
<<<<<<< HEAD
        src="http://imgur.com/1NT7WQK"
        src2="http://imgur.com/mpdZd9N"
=======
        src="http://imgur.com/m0dZX8c"
>>>>>>> Complete converting ocean tiles to sprites
        class="AdriaticSea"
        left={466}
        top={454}
        occupiedOcean={self.props.occupiedOcean}
        latestChange={self.props.latestChange}
        toggleOccupiedOcean={self.props.toggleOccupiedOcean.bind(self)}
        coords="464,458,476,484,490,491,499,514,520,519,526,527,567,557,581,540,573,522,550,513,543,503,527,500,509,471,494,470,483,464,488,455,471,458"
        coords2="3,1,1,15,16,34,22,38,36,57,55,64,57,73,100,93,113,95,113,73,89,57,78,57,74,47,55,46,48,30,35,14,21,17,18,5,14,0"
      />        
    </div>
    )
  }
}

export default OceanTiles;

