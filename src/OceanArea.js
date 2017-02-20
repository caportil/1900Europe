import React, { Component } from 'react';

class OceanArea extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
	let self = this;
	console.log('Rendering OceanArea.js...')
	return (

		<area 
			class={self.props.class} 
			alt="" 
			title="" 
			nohref="nohref" 
			shape="poly" 
			coords={self.props.coords}
			style={{cursor: 'default'}}
			onClick={() => self.props.toggleOccupiedOcean(self.props.class) }
			// onMouseEnter={() => self.props.toggleOccupiedOcean(self.props.class)}
			// onMouseLeave={() => self.props.toggleOccupiedOcean(self.props.class)}
		/>

		)
	}
}

export default OceanArea;