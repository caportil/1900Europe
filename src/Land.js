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
		return self.props.occupiedLand.indexOf(self.props.class) > -1 ? 80 : 40;
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