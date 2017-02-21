import React, { Component } from 'react';

class LandArea extends Component {
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
	console.log('Rendering LandArea.js...')
	return (

		<area 
			class={self.props.class} 
			alt="" 
			title="" 
			nohref="nohref" 
			shape="poly" 
			coords={self.props.coords}
			// style={{cursor: 'default'}}
			onClick={() => self.props.cycleOwnership(self.props.class)}
			// onMouseEnter={() => self.props.cycleOwnership(self.props.class)}
			// onMouseLeave={() => self.props.cycleOwnership(self.props.class)}
		/>

		)
	}
}

export default LandArea;