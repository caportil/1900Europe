import React, { Component } from 'react';
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
  	// imageMapResize();
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
	let path2650 = paper.path("M 504.74847,644.25 1009.9969,643.99804 1010.25,321.74902 1010.5031,-0.5 1010.7515,322.25 1011,645 505.25,644.75098 -0.5,644.50197 Z M 971.5,511.47116 l -4,-1.44105 -0.27475,-0.015 L 966.9505,510 966,507.5 l -0.9505,-2.5 -1.27475,0.0153 -1.27475,0.0153 -1.40932,0.89216 -1.40931,0.89217 -1.34069,-0.51447 L 957,505.78599 v -1.41776 -1.41776 l -2.25,-1.01819 -2.25,-1.01819 -2,-1.21919 -2,-1.21919 -2.66603,-1.79786 -2.66603,-1.79786 -0.62375,-1.62546 -0.62375,-1.62546 2.67421,-2.47967 2.67421,-2.47967 -1.68003,-1.22847 -1.68003,-1.22847 -0.59037,-3.85641 -0.59036,-3.85641 -2.61404,-2.21404 -2.61403,-2.21403 -1.02776,-0.036 -1.02776,-0.036 -1.66663,-1.94648 -1.66663,-1.94648 -4.30561,-1.16859 -4.30561,-1.16858 -2.64541,0.98872 -2.64541,0.98872 -1.35459,-0.85834 -1.35459,-0.85834 -3.18191,-0.0153 -3.1819,-0.0153 -2.01138,-2.82472 -2.01138,-2.82472 -4.30671,-1.26468 -4.30672,-1.26468 -4.94491,-3.13992 -4.94491,-3.13992 -4.55509,-0.0207 L 877.5,451.5 l -1.10046,-1.40574 -1.10046,-1.40573 -2.01673,0.52738 -2.01673,0.52739 -5.32647,-0.842 -5.32646,-0.842 -0.89524,-1.5997 -0.89523,-1.5997 -3.66111,0.16694 -3.66111,0.16694 -1.40499,-0.0969 -1.40499,-0.0969 1.78864,-1.97642 1.78863,-1.97642 0.96171,0.59437 0.96171,0.59437 2.42228,-1.29637 2.42229,-1.29637 0.78997,-3.07158 0.78997,-3.07158 3.43838,-0.3317 3.43837,-0.33171 1.25402,-1.04074 L 870,430.75509 v -1.65832 -1.65831 l 3.18406,-1.20185 3.18405,-1.20185 -0.76739,-0.76739 -0.76739,-0.76739 -0.66666,0.11558 -0.66667,0.11558 -1.2073,-1.72366 -1.2073,-1.72367 -4.2927,-1.13562 -4.2927,-1.13562 -1.5,0.15124 -1.5,0.15124 -1.75,-0.15754 L 856,418 v -0.89658 -0.89657 l 5.71922,-0.0683 5.71921,-0.0683 1.75855,-2.28511 1.75855,-2.28511 0.0222,-1.28138 0.0222,-1.28139 1.75,-0.58533 1.75,-0.58532 2.75,-1.1274 2.75,-1.1274 v -2.1489 -2.1489 l -1.58179,-0.60699 -1.58178,-0.60699 h -2.08948 -2.08947 l -2.00063,1.75 -2.00064,1.75 0.68821,-1.1809 0.6882,-1.1809 -1.02526,-0.63365 -1.02526,-0.63365 -1.89163,0.60039 -1.89164,0.60038 -0.59071,2.35357 -0.59071,2.35357 -2.7587,0.7662 -2.75871,0.7662 -1.85458,0.35408 -1.85459,0.35408 -2.53027,1.99032 -2.53028,1.99031 h -2.39652 -2.39653 l -0.5756,1.5 -0.57561,1.5 h -1.04334 -1.04334 l -5.39815,2.64107 -5.39816,2.64107 -1.90732,3.60893 -1.90732,3.60893 -0.0442,-2.25 L 826,423 h -1.96921 -1.9692 l -4.11846,2.14666 -4.11846,2.14666 -0.50888,1.32614 -0.50889,1.32614 -3.56261,0.66835 -3.56261,0.66835 -1.80777,-1.12897 -1.80777,-1.12897 -2.60241,0.98943 -2.60241,0.98943 0.31934,2.24839 0.31934,2.24839 4.75,0.30479 4.75,0.30479 v 1.74521 1.74521 l 1.2,1.2 1.2,1.2 h 2.69504 2.69504 l 2.35496,2.48272 2.35496,2.48273 3.25,0.0173 3.25,0.0173 v -2.7 -2.7 l 1.2,1.2 1.2,1.2 h 2.76607 2.76608 l 3.52137,-1.67922 3.52137,-1.67923 0.76255,0.81613 0.76256,0.81613 -1.25,0.44643 -1.25,0.44643 v 2.41666 2.41667 h -4.59362 -4.59362 l -0.49496,1.89272 -0.49495,1.89271 -3.03643,0.60729 L 823.75,453 h -2.5213 -2.52129 l -4.81086,4.5 -4.81087,4.5 h -0.85171 -0.85171 l -1.84094,-1.34613 -1.84094,-1.34613 -1.10019,-3.40387 L 801.5,452.5 l -2.5,-0.2916 -2.5,-0.2916 -2,-0.93153 -2,-0.93154 -4,-0.31457 -4,-0.31456 2.75,-1.18755 2.75,-1.18755 V 445 442.9505 l 2.2911,-0.87108 2.29109,-0.87107 1.34692,-1.62293 1.34691,-1.62294 -1.8655,-2.06135 -1.86549,-2.06135 -3.02252,0.63384 -3.02251,0.63384 -6.2142,0.19627 -6.21421,0.19627 -1.62215,-1.62207 -1.62215,-1.62207 3.08635,-1.07591 L 778,430.10404 v -0.99532 -0.99531 l -2.22194,-1.55631 -2.22193,-1.5563 -0.0281,-2.2504 -0.0281,-2.2504 -2.21465,-0.31492 -2.21466,-0.31492 -0.64375,2.56492 L 767.78311,425 h -0.83257 -0.83258 l -0.56001,-0.90612 -0.56001,-0.90612 -1.90655,0.49857 -1.90655,0.49858 -0.49884,1.90754 L 760.18717,428 h -2.05467 -2.05466 l -1.94793,-2.09085 -1.94792,-2.09086 -1.84103,0.35107 -1.84103,0.35107 -0.34907,2.46502 -0.34906,2.46503 -1.90094,1.33146 L 744,432.11341 V 434 v 1.88659 l 2.09766,1.46926 2.09765,1.46925 -2.09765,1.12264 L 744,441.07037 V 443.53518 446 h -0.63976 -0.63975 l -1.18941,-1.62661 -1.18941,-1.62661 -2.17084,1.16179 -2.17083,1.1618 v 0.89339 0.89338 l 1.5,1.5 1.5,1.5 v 1.98857 1.98856 l -4.75731,1.02026 -4.7573,1.02026 -4.17199,-0.55958 -4.17198,-0.55958 -1.03862,-2.62781 -1.03861,-2.62782 -1.15432,-4.76391 -1.15431,-4.76391 0.61359,-3.06795 0.61359,-3.06795 -1.01116,-1.88939 -1.01117,-1.88939 6.26979,-2.93194 6.2698,-2.93194 3.5,-3.91569 3.5,-3.9157 2.21816,-4.47689 2.21815,-4.47688 2.28185,-2.08582 2.28184,-2.08582 6.75566,-3.60792 6.75566,-3.60793 0.54067,0.0842 0.54066,0.0842 5.20368,-2.47176 5.20367,-2.47177 3.15331,-1.32423 3.15331,-1.32424 1.59669,-2.70297 L 779,383.19142 V 379.59571 376 h 1 1 v -7.95295 -7.95294 l 1.16052,-2.54706 L 783.32103,355 h 0.71816 0.71817 l 1.21288,-2.92814 1.21287,-2.92815 1.32195,-0.50728 1.32195,-0.50728 -0.5634,-4.31457 -0.5634,-4.31458 -0.74704,-0.5 -0.74705,-0.5 -0.35306,-2.44548 -0.35306,-2.44548 4.5,-1.35086 4.5,-1.35085 4,0.61735 4,0.61736 8.07079,0.49737 8.0708,0.49737 1.3649,-1.6446 1.36491,-1.64461 -1.4357,-0.92379 L 819.5,328 l 1.09603,-0.75 1.09603,-0.75 0.67302,-2.75 0.67302,-2.75 h 1.41356 1.41356 l 0.59597,-1.87772 0.59596,-1.87772 2.34687,-2.73122 2.34687,-2.73122 4.12456,0.69684 L 840,313.1758 v 0.69196 0.69196 l 5.06818,1.96674 5.06818,1.96674 1.52578,1.68596 1.52577,1.68596 1.45693,-0.55907 1.45692,-0.55908 2.19912,1.98292 2.19912,1.98292 6.18659,1.26678 6.18659,1.26678 3.46293,-0.64965 3.46292,-0.64964 1.13575,-1.36849 1.13574,-1.36849 8.68306,0.35707 8.68307,0.35707 3.2773,3.78788 3.27731,3.78788 1.95886,4.27423 1.95885,4.27422 3.67283,3.46393 3.67283,3.46392 3.62268,1.00627 3.62269,1.00628 2.28518,0.006 2.28519,0.006 2.46481,1.61501 2.46482,1.61501 v 2.81356 2.81356 l 1.5,1.5 1.5,1.5 v 2.94899 2.94898 l 1.61617,1.3413 1.61617,1.3413 3.63383,1.33325 3.63383,1.33324 6.79473,1.96381 6.79473,1.9638 4.20527,1.8337 4.20527,1.83371 5.5,2.09129 5.5,2.09129 4.36123,1.12759 4.36122,1.1276 2.13878,2.23921 2.13877,2.23922 3.61803,2.19229 3.61807,2.19229 h 3.6319 3.632 v 58 58 l -7.75,0.2095 -7.75,0.2095 -3,-0.15619 -3,-0.15618 -3.55559,-0.64003 -3.55559,-0.64002 -1.31686,1.58671 -1.31685,1.58671 -0.62755,-0.0439 -0.62756,-0.0439 -4,-1.44105 z M 800,461 l -1.5,-0.96937 1.75,-0.0153 L 802,460 v 1 1 l -0.25,-0.0153 -0.25,-0.0153 z m 20.76155,-20.84013 -2.73845,-1.65728 -0.47455,-1.23666 -0.47455,-1.23666 2.12858,1.23536 2.12858,1.23537 1.83442,1.75 L 825,442 l -0.75,-0.0914 -0.75,-0.0914 -2.73845,-1.65728 z M 823,428 v -1 h 1 1 v 1 1 h -1 -1 z");
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
      			top: '1200px',
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
		    	  top: '1200px', 
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

        <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
          <path d="M 500 500 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z" />
        </svg>1

      </div>
    );
  }
}


export default App;
