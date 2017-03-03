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
	}

	componentWillUpdate(nextProps) {
		let self = this;
		self.determineOwner(nextProps);
		// console.log('After running componentWillUpdate, currentOwner is:', currentOwner)
	}

	shouldComponentUpdate(nextProps) {
		let self = this;
		return self.props.class === nextProps.latestChange;
	}

	determineOwner(nextProps) {
		let self = this;
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
	console.log('Land running render in ' + self.props.class + '... current change is: ' + self.props.latestChange)
	return (

		<svg class={self.props.class} width="2022" height="1290" viewBox="0 0 1011 645"
      style={{
        position: 'absolute', 
        left: '100px',
        top:'200px',
        fill: `${self.toggleHue()}`,
      }}>
      <path d={self.props.path}/>
    </svg>

		)

	}
}

export default Land;