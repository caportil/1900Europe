import React, { Component } from 'react';

let currentOwner = 'none';

class Land extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	componentWillMount() {
		let self = this;
		self.determineOwner(self.props);
		// currentOwner = owner;
		// console.log('After running componentWillMount, currentOwner is:', currentOwner)
	}

	componentWillUpdate(nextProps) {
		let self = this;
		// console.log('componentWillUpdate running... current props are:', self.props, 'and nextProps are:', nextProps)
		self.determineOwner(nextProps);
		// currentOwner = owner;
		// console.log('After running componentWillUpdate, currentOwner is:', currentOwner)
	}

	shouldComponentUpdate(nextProps) {
		let self = this;
		// console.log('running shouldComponentUpdate... self.props.class is:', self.props.class, 'and nextProps is:', nextProps)
		return self.props.class === nextProps.latestChange;
	}

	determineOwner(nextProps) {
		let self = this;
		// console.log('Within determineOwner, nextProps are:', nextProps)
		if (nextProps.england.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'england')
			currentOwner = 'england'
		} else if (nextProps.germany.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'germany')
			currentOwner = 'germany'
		} else if (nextProps.france.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'france')
			currentOwner = 'france'
		} else if (nextProps.italy.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'italy')
			currentOwner = 'italy'
		} else if (nextProps.austria.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'austria')
			currentOwner = 'austria'
		} else if (nextProps.russia.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'russia')
			currentOwner = 'russia'
		} else if (nextProps.ottomans.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'ottomans')
			currentOwner = 'ottomans'
		} else {
			console.log('currentOwner will now be: neutral')
			currentOwner = 'neutral'
		}
	}

	toggleHue() {
		let self = this;
		// console.log('running toggleHue... currentOwner:', currentOwner)
		// return self.props.state.occupiedLand.indexOf(self.props.class) > -1 ? 80 : 40;
		if (currentOwner === 'england') {
			return 80;
		} else if (currentOwner === 'germany') {
			return 190;
		} else if (currentOwner === 'france') {
				return 10;
		} else if (currentOwner === 'italy') {
				return 300;
		} else if (currentOwner === 'austria') {
				return 120;
		} else if (currentOwner === 'russia') {
				return 340;
		} else if (currentOwner === 'ottomans') {
				return 220;
		} else {
			return 40;
		}
	}

	render() {
	let self = this;
	console.log('Land running render in ' + self.props.class + '... current change is: ' + self.props.latestChange)
	return (

		<img 
			src={`${self.props.src}.png`}
			// src={`${self.props.class === 'Ireland' && self.props.england.indexOf(self.props.class) > -1 ? self.props.src : self.props.class === 'Ireland' ? self.props.src2 : self.props.src}.png`}
		  class={self.props.class}
		  alt="" 
		  useMap="#combinedMap"
		  style=
		  	{{position: 'absolute', 
	    	  left: '100px', 
	    	  top: '200px', 
	    	  filter: `hue-rotate(${self.toggleHue()}deg) opacity(70%)`
			}} 
		/>

		)
	}
}

export default Land;
