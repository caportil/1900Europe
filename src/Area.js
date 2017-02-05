import React, { Component } from 'react';

class Area extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	render() {
	let self = this;
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
		/>

		)
	}
}

export default Area;