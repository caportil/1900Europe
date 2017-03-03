import React, { Component } from 'react';

class Ocean extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

	shouldComponentUpdate(nextProps) {
		let self = this;
		// console.log('running shouldComponentUpdate... self.props.class is:', self.props.class, 'and nextProps is:', nextProps)
		return self.props.class === nextProps.latestChange;
	}

	toggleHue() {
		let self = this;
		return self.props.occupiedOcean.indexOf(self.props.class) > -1 ? 180 : 240;
	}

	render() {
	let self = this;
	console.log('Running a render in ' + self.props.class + '...' + 'occupiedOcean tiles are currently: ' + self.props.occupiedOcean)
	return (
		<svg class={self.props.class} width="1011" height="645" 
      style={{
        position: 'absolute', 
        left: '100px',
        top:'200px',
        fill: `blue`,
      }}>
      <path d={self.props.path}/>
    </svg>
		)
	}
}

export default Ocean;