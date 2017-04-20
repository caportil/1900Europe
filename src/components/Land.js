import React, { Component } from 'react';
import { connect } from 'react-redux';
import TerritoriesActions from './../actions/TerritoriesActions.js';

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
	}

	componentWillUpdate(nextProps) {
		let self = this;
		self.determineOwner(nextProps);
	}

	determineOwner(nextProps) {
		let self = this;
		// console.log('Running determineOwner... nextProps:', nextProps);
		if (nextProps.territories.england.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'england')
			currentOwner = 'england'
		} else if (nextProps.territories.germany.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'germany')
			currentOwner = 'germany'
		} else if (nextProps.territories.france.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'france')
			currentOwner = 'france'
		} else if (nextProps.territories.italy.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'italy')
			currentOwner = 'italy'
		} else if (nextProps.territories.austria.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'austria')
			currentOwner = 'austria'
		} else if (nextProps.territories.russia.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'russia')
			currentOwner = 'russia'
		} else if (nextProps.territories.ottomans.indexOf(self.props.class) > -1) {
			// console.log('currentOwner will now be:', 'ottomans')
			currentOwner = 'ottomans'
		} else {
			console.log('currentOwner will now be: neutral')
			currentOwner = 'neutral'
		}
	}

	toggleHue() {
		let self = this;
		if (currentOwner === 'england') {
			return '#ff9999';
		} else if (currentOwner === 'germany') {
			return '#4d4d4d';
		} else if (currentOwner === 'france') {
				return '#3366ff';
		} else if (currentOwner === 'italy') {
				return '#006600';
		} else if (currentOwner === 'austria') {
				return '#b30000';
		} else if (currentOwner === 'russia') {
				return 'white';
		} else if (currentOwner === 'ottomans') {
				return '#ffd11a';
		} else {
			return '#ffcc80';
		}
	}

	render() {
		let self = this;
		let territories = self.props.territories;
		// console.log('Land running render in ' + self.props.class + '... current change is: ' + self.props.latestChange, 'and store.territories is:', territories);
		return (
	    <path 
	    	d={self.props.path}
	    	style={{fill: `${self.toggleHue()}`}}
	    	onClick={() => {
	    		console.log('Onclick in Land.js, territories.newOwner is:', territories.newOwner);
	    		if (territories.newOwner) {
	    			// self.props.assignNewOwner(self.props.class)
	    			console.log('Inside Land.js... territories.newOwner is:', territories.newOwner);
	    			self.props.dispatch(TerritoriesActions.transferOwnership(self.props.class));
	    		} else {
	    			console.log(`Clicked on ${self.props.class}!`)
	    		}
	    	}}
	    />
		)
	}
}

export default connect(store => {
	return {
		territories: store.territories
	}
})(Land);
