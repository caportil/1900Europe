import React, { Component } from 'react';
import imageMapResize from 'image-map-resizer';
import Ocean from './Ocean.js';
import OceanTiles from './OceanTiles.js';
import LandTiles from './LandTiles.js';
import CombinedMap from './CombinedMap.js';
import Raphael from './../raphael/raphael.js';
// import Map from './Map.js';
// import SVG from './map_england.svg';

let paper = new Raphael(100, 1000, 1000, 1200);

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
    // console.log('occupiedOcean is:', self.state.occupiedOcean)
    self.setState({occupiedOcean: newOccupied, latestChange: tile})
  }

  transferOwnership(tile, fromm, to) {
  	let self = this;
  	// console.log('self.state is:', self.state, 'and self.state[from] is:', self.state[from])
  	let fromCountry = self.state[fromm];
  	let toCountry = self.state[to];
  	// console.log('transferOwnership invoked! fromCountry is:', fromCountry)
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

  componentWillMount() {
  	console.log('Running componentWillMount');
  	imageMapResize();
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
	// let circle = paper.circle(100, 100, 100);
	let tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
	// tetronimo.attr({fill: '#8cf', stroke: '#ddd', 'stroke-width': 5});
	tetronimo.attr(
	    {
	        stroke: '#3b4449',
	        'stroke-width': 10,
	        'stroke-linejoin': 'round',
	        fill: 'blue'
	    }
	);
	tetronimo.click(() => tetronimo.attr({fill: 'red'}));
	// tetronimo.mouseover(() => console.log('Hovered!'));
	// tetronimo.mouseout(() => console.log('Unhovered!'));
	// tetronimo.click(() => tetronimo.attr({fill: 'red'}));
	let path2650 = paper.path("m 250,300 15.08984,17.73718 -21.70818,-2.64734 -0.79421,16.4135 13.2367,5.02995 -1.05894,30.4444 10.58937,12.97197 1.05894,12.44249 -5.29468,6.08888 9.00095,13.76617 -17.20771,2.91207 11.11882,10.32463 -1.58839,11.38356 6.3536,12.97196 -2.11787,10.32463 3.44155,13.76616 -11.91303,29.38547 -1.05893,4.76522 -7.41256,11.91303 v 17.20771 l -14.56037,25.67918 -12.97196,3.17681 11.64829,21.97292 -21.17872,3.971 -14.29563,-8.20674 -20.64925,13.2367 -16.678235,-3.70628 -24.09079,2.64734 -21.708185,3.17681 5.824147,7.14789 -13.236698,15.61923 -13.501431,0.79422 -17.2077087,14.03096 -11.3835618,4.23578 -0.5294655,-404.77834 12.1777619,0.26472 12.9719641,-23.82604 -13.2366987,0.52946 -9.7951562,3.971 -1.5884056,-5.82414 -19.3255815,-0.52946 -11.383554,-7.14782 0.264733,-5.02994 10.05989,-6.88308 20.913978,-0.79422 -9.00095,-10.32461 18.5313771,1.05892 5.029945,-6.61834 -11.1188282,-6.61834 2.6473411,-5.55943 -1.0589355,-9.00095 7.9420188,-2.64733 1.5884038,-14.29563 2.3826056,-6.88309 14.2956343,5.29467 12.70723,-10.58935 15.884037,10.85409 -3.706275,-9.53043 8.471487,-6.61834 11.648294,2.38261 7.942019,20.64924 -6.618349,7.14782 -5.029945,14.29563 10.854092,-3.70627 7.942019,-5.55942 -2.64734,-7.67727 2.912074,-6.61836 -5.294679,-11.91303 1.853137,-9.79515 10.059891,-5.55942 7.942019,2.91207 -5.559414,-12.70723 16.678238,7.14782 1.85314,4.76521 16.67824,7.14782 0.26473,5.02994 -3.97101,4.50049 -12.17776,4.23573 -9.26569,8.73623 -3.441539,9.26569 20.119779,82.597 z");
	path2650.attr({
		stroke: '#3b4449',
		'stroke-width': 10,
		'stroke-linejoin': 'round',
		fill: 'blue'
	}) 
	path2650.mouseover(() => console.log('Hovered!'));
	path2650.mouseout(() => console.log('Unhovered!'));
	path2650.click(() => path2650.attr({fill: 'red'}));
	{/*
	tetronimo.addEventListener('mouseover', () => {
		this.animate({fill: 'red'}, 500)
	}, true)
	setTimeout(() => tetronimo.attr({
	        stroke: '#3b4449',
	        fill: 'red',
	        'stroke-width': 10,
	        'stroke-linejoin': 'round',
	        rotation: 90
  }), 2000);
	*/}
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
      	<img 
	      	src="http://imgur.com/9ec1SWM.png" 
	      	style={{position: 'absolute', 
      			left: '100px', 
      			top: '200px',
      			height: '645px',
      			width: '1011px',
		    	  // height: '968px',
		    	  // width: '1517px',
    			}}
      	/>

{/*
      	<OceanTiles
      		occupiedOcean={self.state.occupiedOcean}
      		latestChange={self.state.latestChange}
      	/>
*/}
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


		{/* City Overlay */}
				<img src="http://imgur.com/QvxmqYi.png"
					useMap="#combinedMap"
	    		style={{position: 'absolute', 
		    	  left: '100px', 
		    	  top: '200px', 
		    	  height: '645px',
		    	  width: '1011px',
		    	  // height: '968px',
		    	  // width: '1517px',
		    	}}
	    	/>

	    	<CombinedMap 
	    		toggleOccupiedOcean={self.toggleOccupiedOcean.bind(self)}
	    		cycleOwnership={self.cycleOwnership.bind(self)}
	    	/>



      </div>
    );
  }
}


export default App;