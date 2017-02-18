import React, { Component } from 'react';
import Ocean from './Ocean.js';
import OceanArea from './OceanArea.js';
import LandArea from './LandArea.js';
import OceanTiles from './OceanTiles.js';
import LandTiles from './LandTiles.js';

class App extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
			occupiedOcean: [],
			occupiedLand: [],
			england: ['London', 'Wales', 'York', 'Liverpool', 'Edinburgh', 'Clyde'],
			germany: ['Berlin', 'Kiel', 'Ruhr', 'Silesia', 'Munich', 'Prussia'],
			france: ['Paris', 'Brest', 'Burgundy', 'Picardy', 'Marseilles', 'Gascony'],
			italy: ['Rome', 'Venice', 'Tuscany', 'Piemonte', 'Naples', 'Apulia'],
			austria: ['Vienna', 'Budapest', 'Bohemia', 'Galicia', 'Trieste', 'Tyrolia'],
			russia: ['Moscow', 'Finland', 'Livonia', 'Ukraine', 'Warsaw', 'StPetersburg', 'Sevastopol'],
			ottomans: ['Constantinople', 'Syria', 'Smyrna', 'Armenia', 'Ankara'],
			hue: 240,
			englandHue: 200,
			latestChange: "",
			altSprite: false,
		}
	}


  toggleOccupiedOcean(tile) {
    let self = this;
    let index = self.state.occupiedOcean.indexOf(tile);
    let newOccupied = self.state.occupiedOcean; 
    if (index > -1) {
      newOccupied = newOccupied.slice(0, index).concat(newOccupied.slice(index + 1));
    } else {
      newOccupied.push(tile);
    }
    console.log('occupiedOcean is:', self.state.occupiedOcean)
    self.setState({occupiedOcean: newOccupied, latestChange: tile})
  }

  transferOwnership(tile, fromm, to) {
  	let self = this;
  	// console.log('self.state is:', self.state, 'and self.state[from] is:', self.state[from])
  	let fromCountry = self.state[fromm];
  	let toCountry = self.state[to];
  	let fromIndex = fromCountry.indexOf(tile);
  	let toIndex = toCountry.indexOf(tile);
  	let newStateObject = {};
  	fromCountry = fromCountry.slice(0, fromIndex).concat(fromCountry.slice(fromIndex + 1));
  	toCountry.push(tile);
  	newStateObject[fromm] = fromCountry;
  	newStateObject[to] = toCountry;
  	newStateObject['latestChange'] = tile;
  	// console.log('after running transferOwnership, newStateObject is:', newStateObject)
  	self.setState(newStateObject);
  }

  toggleOccupiedLand(tile) {
    let self = this;
    let index = self.state.occupiedLand.indexOf(tile);
    let newOccupied = self.state.occupiedLand; 
    if (index > -1) {
      newOccupied = newOccupied.slice(0, index).concat(newOccupied.slice(index + 1));
    } else {
      newOccupied.push(tile);
    }
    self.setState({occupiedLand: newOccupied})
  }

  findOwnership(tile) {
  	let self = this;
  	// console.log('running findOwnership with tile', tile, '...')
  	if (self.state.england.indexOf(tile) > -1) {
  		console.log('england found!')
  		return 'england';
  	} else if (self.state.germany.indexOf(tile) > -1) {
  		console.log('germany found!')
  		return 'germany';
  	} else if (self.state.france.indexOf(tile) > -1) {
  		return 'france';
  	} else if (self.state.italy.indexOf(tile) > -1) {
  		return 'italy';
  	} else if (self.state.austria.indexOf(tile) > -1) {
  		return 'austria';
  	} else if (self.state.russia.indexOf(tile) > -1) {
  		return 'russia';
  	} else if (self.state.ottomans.indexOf(tile) > -1) {
  		return 'ottomans';
  	} else {
  		console.log('Nobody owns this tile!')
  	}
  }

  cycleOwnership(tile) {
  	let self = this;
  	let owner = self.findOwnership(tile);
  	// console.log('cycleOwnership invoked and owner is currently:', owner);
  	owner === 'england' ? self.transferOwnership(tile, 'england', 'germany') : self.transferOwnership(tile, 'germany', 'england')
  }

  componentDidMount() {
  	console.log('Finished mounting')
  }

  componentDidUpdate() {
  	let self = this;
  	console.log('Finished rendering...')
  }

  render() {
	let self = this;
	const stylesheet = {
	}
	console.log('Rendering in App.js... Countries currently are:', self.state, 'and self.state.altSprite is:', self.state.altSprite)
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

      	<OceanTiles
      		occupiedOcean={self.state.occupiedOcean}
      		latestChange={self.state.latestChange}
      		toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
      	/>

      	{/*
      	<LandTiles
	      	england={self.state.england}
	      	germany={self.state.germany}
	      	france={self.state.france}
	      	italy={self.state.italy}
	      	austria={self.state.austria}
	      	russia={self.state.russia}
	      	ottomans={self.state.ottomans}
	      	latestChange={self.state.latestChange}
      	/>
				*/}

      	<img src="" style={{position: 'absolute', left: '100px', top: '1200px', width: '1011px', height: '645px',  background: `url(http://imgur.com/GcuArK8.png) 0px ${self.state.altSprite ? '-645px' : '0px'}`}} useMap="#spriteMap"
      	/>
      	<map name="spriteMap">
	      	<area 
	      		class="NAO2"
	      		alt="" 
	      		title="" 
	      		nohref="nohref" 
	      		shape="poly" 
	      		coords="0,0,0,311,35,305,94,306,144,319,189,293,181,285,180,278,206,268,199,256,206,244,215,243,246,236,266,244,265,265,292,276,287,260,268,257,279,244,274,233,277,218,264,201,286,189,283,203,301,195,309,122,274,67,222,67,192,45,208,39,196,23,232,27,211,16,231,8,226,0"
	      		style={{cursor: 'default'}}
	      		// onClick={() => self.props.toggleOccupiedOcean(self.props.class) }
	      		onMouseEnter={() => self.setState({altSprite: !self.state.altSprite})}
	      		onMouseLeave={() => self.setState({altSprite: !self.state.altSprite})}
	      	/>
      	</map>













    {/* Combined Map */}
        <map name="combinedMap">

   		{/* Continent */}

   			{/* London */}
	   			<LandArea
	   			  class="London"
	   			  state={self.state}
	   			  cycleOwnership={self.cycleOwnership.bind(self)}
	   			  //coordsL="304,306,291,322,294,331,311,339,329,339,323,332,328,323,340,314,338,307"
	   			/>

   			{/* Wales */}
	   			<LandArea
	   			  class="Wales"
	   			  cycleOwnership={self.cycleOwnership.bind(self)}
	   			  //coordsL="273,284,267,298,250,304,280,315,258,320,243,324,229,334,259,332,264,330,280,335,292,333,289,320,299,309,292,299,282,298,275,294,284,284"
	   			/>

   			{/* Liverpool */}
	   			<LandArea
	   			  class="Liverpool"
	   			  cycleOwnership={self.cycleOwnership.bind(self)}
	   			  //coordsL="284,247,271,258,290,261,291,266,294,286,281,291,297,302,302,286,305,269,300,260,290,246"
	   			/>

   			{/* York */}
	   			<LandArea
	   			  class="York"
	   			  cycleOwnership={self.cycleOwnership.bind(self)}
	   			  //coordsL="305,261,298,280,301,308,327,306,321,292,322,281,318,273,314,262"
	   			/>

   			{/* Clyde */}
	   			<LandArea
	   			  class="Clyde"
	   			  cycleOwnership={self.cycleOwnership.bind(self)}
	   			  //coordsL="275,191,266,209,267,234,281,249,293,240,297,208,311,202,301,191"
	   			/>

   			{/* Edinburgh */}
	   			<LandArea
	   			  class="Edinburgh"
	   			  cycleOwnership={self.cycleOwnership.bind(self)}
	   			  //coordsL="318,199,302,207,292,227,291,253,307,260,320,260,312,245,295,240,299,234,316,235,328,223,304,214,309,208"
	   			/>

   			{/* Ireland */}
	   			<LandArea
	   			  class="Ireland"
	   			  cycleOwnership={self.cycleOwnership.bind(self)}
	   			  //coordsL="208,248,201,260,195,277,187,291,228,295,237,295,248,269,262,261,256,244,244,238"
	   			/>


        </map>
      </div>
    );
  }
}


export default App;