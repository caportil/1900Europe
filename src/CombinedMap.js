import React, { Component } from 'react';

class CombinedMap extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	render() {
	let self = this;
	return (
	        <map name="combinedMap">

		      {/* Ocean */}

		          {/* NAO */}
		          <OceanArea
		            class="NAO"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="0,0,0,311,35,305,94,306,144,319,189,293,181,285,180,278,206,268,199,256,206,244,215,243,246,236,266,244,265,265,292,276,287,260,268,257,279,244,274,233,277,218,264,201,286,189,283,203,301,195,309,122,274,67,222,67,192,45,208,39,196,23,232,27,211,16,231,8,226,0"
		          />

		          {/* NorwegianSea */}
		          <OceanArea
		            class="NorwegianSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="234,5,239,26,283,33,292,54,280,71,323,128,301,157,308,194,330,191,352,173,372,175,421,169,501,119,555,59,573,50,599,32,616,26,623,5"
		          />

		          {/* MAO */}
		          <OceanArea
		            class="MAO"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="0,315,1,641,13,641,28,615,43,603,87,598,122,572,118,546,75,535,87,512,83,494,112,470,116,434,140,427,235,455,256,419,231,375,226,365,124,318,84,307"
		          />

		          {/* Tyrrhenian Sea */}
		          <OceanArea
		            class="TyrrhenianSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="424,494,408,521,413,557,398,567,401,594,426,597,458,582,494,589,514,581,515,562"
		          />

		          {/* North Sea */}
		          <OceanArea
		            class="NorthSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="352,183,309,211,330,220,311,241,321,273,329,300,343,309,328,331,371,338,380,319,398,321,403,283,435,267,439,244,420,229,431,214,419,199,431,171,394,171"
		          />
		          
		          {/* Ionian Sea */}
		          <OceanArea
		            class="IonianSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="444,595,417,617,435,642,653,642,652,627,621,615,610,596,581,555,558,556,542,550,533,563,541,571,519,591,506,591,504,613,476,600,449,595"
		          />
		          
		          {/* WesternMediterranean */}
		          <OceanArea
		            class="WesternMediterranean"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="132,566,145,586,189,599,214,587,302,589,383,596,394,576,386,546,328,538,294,547,280,542,264,552,245,546,223,556,193,569,165,562,136,566"
		          />
		          
		          {/* EasternMediterranean */}
		          <OceanArea
		            class="EasternMediterranean"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="658,643,882,642,873,606,879,590,851,595,828,608,807,607,789,604,764,614,751,607,708,633,697,637,665,638,660,637"
		          />
		          
		          {/* GulfOfBothnia */}
		          <OceanArea
		            class="GulfOfBothnia"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="614,108,601,123,600,137,579,159,557,165,560,195,578,212,563,229,552,241,596,258,616,250,636,261,642,241,625,224,645,213,670,217,697,206,676,195,625,206,604,197,599,164,610,149,633,128,634,114"
		          />
		          
		          {/* EnglishChannel */}
		          <OceanArea
		            class="EnglishChannel"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="190,347,226,362,248,357,271,366,274,353,298,363,316,355,326,344,295,336,282,342,261,331,253,334,242,333,230,339,225,339,191,346,193,342"
		          />
		          
		          {/* HelgolandBight */}
		          <OceanArea
		            class="HelgolandBight"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="431,268,400,287,398,307,417,313,429,307,436,310,443,300,441,283,435,267"
		          />
		          
		          {/* Skagerrak */}
		          <OceanArea
		            class="Skagerrak"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="479,216,441,238,441,250,454,250,463,247,475,240,470,256,480,263,480,266,496,270"
		          />
		          
		          {/* IrishSea */}
		          <OceanArea
		            class="IrishSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="255,270,239,293,223,295,202,300,192,297,153,321,188,343,226,335,232,327,241,324,253,316,265,318,249,310,248,301,260,298,263,295,258,288,267,286,273,284,289,286,290,279,268,266,253,264"
		          />
		          
		          {/* BlackSea */}
		          <OceanArea
		            class="BlackSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="753,431,742,463,728,468,731,487,714,499,734,529,771,526,798,510,838,505,882,511,921,501,938,489,933,476,900,463,882,455,850,448,867,432,857,421,871,415,865,403,814,429,829,442,840,438,841,450,823,455,811,464,799,464,795,453,784,453,793,441,779,437,764,429,755,429"
		          />
		          
		          {/* BarentsSea */}
		          <OceanArea
		            class="BarentsSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="624,2,627,17,641,24,656,21,676,28,666,38,685,36,696,40,719,45,764,54,774,73,760,90,708,91,727,113,761,126,736,110,747,105,787,111,771,95,787,74,799,78,796,65,788,53,775,39,793,34,804,37,809,41,806,45,816,55,825,50,830,32,843,20,848,5,853,11,854,29,862,47,859,38,861,26,861,14,874,3"
		          />
		          
		          {/* BalticSea */}
		          <OceanArea
		            class="BalticSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="549,244,540,281,517,284,507,291,491,286,479,300,474,310,499,306,518,315,529,311,558,299,577,301,591,310,587,296,598,289,602,262,583,252,574,251,569,263,566,247,550,244"
		          />
		          
		          {/* GulfOfLyon */}
		          <OceanArea
		            class="GulfOfLyon"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="314,476,314,499,292,506,268,511,242,528,252,550,275,539,301,528,316,535,360,531,384,540,387,529,403,524,400,502,419,495,427,487,417,470,392,479,375,484,362,488,343,480,331,474"
		          />
		          
		          {/* AegeanSea */}
		          <OceanArea
		            class="AegeanSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="675,543,665,550,650,557,631,542,647,571,669,586,663,592,652,591,646,606,655,631,675,630,693,633,713,629,725,620,740,611,722,605,719,592,702,585,696,572,709,574,703,563,692,559,693,544,675,538,668,539,658,543,667,550"
		          />
		          
		          {/* AdriaticSea */}
		          <OceanArea
		            class="AdriaticSea"
		            toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
		            coords="464,458,476,484,490,491,499,514,520,519,526,527,567,557,581,540,573,522,550,513,543,503,527,500,509,471,494,470,483,464,488,455,471,458"
		          />
		          

		   		{/* Continent */}

		   			{/* London */}
			   			<LandArea
			   			  class="London"
			   			  state={self.state}
			   			  cycleOwnership={self.cycleOwnership.bind(self)}
			   			  coords="304,306,291,322,294,331,311,339,329,339,323,332,328,323,340,314,338,307"
			   			  // coords="657,611,641,618,620,619,607,618,582,645,626,682,658,674,652,651,667,641,686,634,674,618"
			   			/>

		   			{/* Wales */}
			   			<LandArea
			   			  class="Wales"
			   			  cycleOwnership={self.cycleOwnership.bind(self)}
			   			  coords="273,284,267,298,250,304,280,315,258,320,243,324,229,334,259,332,264,330,280,335,292,333,289,320,299,309,292,299,282,298,275,294,284,284"
			   			/>

		   			{/* Liverpool */}
			   			<LandArea
			   			  class="Liverpool"
			   			  cycleOwnership={self.cycleOwnership.bind(self)}
			   			  coords="284,247,271,258,290,261,291,266,294,286,281,291,297,302,302,286,305,269,300,260,290,246"
			   			/>

		   			{/* York */}
			   			<LandArea
			   			  class="York"
			   			  cycleOwnership={self.cycleOwnership.bind(self)}
			   			  coords="305,261,298,280,301,308,327,306,321,292,322,281,318,273,314,262"
			   			/>

		   			{/* Clyde */}
			   			<LandArea
			   			  class="Clyde"
			   			  cycleOwnership={self.cycleOwnership.bind(self)}
			   			  coords="275,191,266,209,267,234,281,249,293,240,297,208,311,202,301,191"
			   			/>

		   			{/* Edinburgh */}
			   			<LandArea
			   			  class="Edinburgh"
			   			  cycleOwnership={self.cycleOwnership.bind(self)}
			   			  coords="318,199,302,207,292,227,291,253,307,260,320,260,312,245,295,240,299,234,316,235,328,223,304,214,309,208"
			   			/>

		   			{/* Ireland */}
			   			<LandArea
			   			  class="Ireland"
			   			  cycleOwnership={self.cycleOwnership.bind(self)}
			   			  coords="208,248,201,260,195,277,187,291,228,295,237,295,248,269,262,261,256,244,244,238"
			   			/>


		        </map>

		)
	}
}

export default CombinedMap;