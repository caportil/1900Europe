import React, { Component } from 'react';

class Ocean extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	toggleHue() {
		let self = this;
		return self.props.occupiedOcean.indexOf(self.props.class) > -1 ? 180 : 240;
	}

	render() {
		let self = this;
		// console.log('Running a render in ' + self.props.class + '...' + 'occupiedOcean tiles are currently: ' + self.props.occupiedOcean)
		return (
			<path 
				d={self.props.path}
				style={{fill: `#80ccff`}}
				onClick={() => console.log(`Clicked on ${self.props.class}!`)}
			/>
		)
	}
}

export default Ocean;