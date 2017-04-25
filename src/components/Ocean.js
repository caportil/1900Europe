import React, { Component } from 'react';

class Ocean extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	toggleHighlight() {
		let self = this;
		return self.props.occupiedOcean.indexOf(self.props.class) > -1 ? 180 : 240;
	}

	render() {
		let self = this;
		return (
			<path 
				d={self.props.path}
				// style={{fill: self.toggleHighlight()}}
				style={{fill: `#80ccff`}}
				onClick={() => console.log(`Clicked on ${self.props.class}!`)}
			/>
		)
	}
}

export default Ocean;