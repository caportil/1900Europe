import React, { Component } from 'react';

class Land extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	toggleHue() {
		let self = this;
		// return self.props.state.occupiedLand.indexOf(self.props.class) > -1 ? 80 : 40;
		if (self.props.england.indexOf(self.props.class) > -1) {
			return 80;
		} else if (self.props.germany.indexOf(self.props.class) > -1) {
			return 190;
		} else if (self.props.france.indexOf(self.props.class) > -1) {
				return 10;
		} else if (self.props.italy.indexOf(self.props.class) > -1) {
				return 300;
		} else if (self.props.austria.indexOf(self.props.class) > -1) {
				return 120;
		} else if (self.props.russia.indexOf(self.props.class) > -1) {
				return 340;
		} else if (self.props.ottomans.indexOf(self.props.class) > -1) {
				return 220;
		} else {
			return 40;
		}
	}

	render() {
	let self = this;
	return (

		<img src={`${self.props.src}.png`}
		  class={self.props.class}
		  alt="" 
		  useMap="#combinedMap"
		  style=
		  	{{position: 'absolute', 
	    	  left: '100px', 
	    	  top: '200px', 
	    	  filter: `hue-rotate(${self.toggleHue()}deg) opacity(75%) brightness(100%) saturate(100%)`
			}} 
		/>

		)
	}
}

export default Land;
