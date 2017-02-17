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

		<img src={`${self.props.src2}.png`}
		  class={self.props.class}
		  alt="" 
		  useMap="#combinedMap"
		  style=
		  	{{position: 'absolute', 
	    	  // left: `${Number(self.props.left) + 100}px`,
	    	  // top: `${Number(self.props.top) + 200}px`,
	    	  left: '100px',
	    	  top: '200px',
	    	  filter: `hue-rotate(${self.toggleHue()}deg) opacity(45%) opacity(70%)`
			}} 
		/>

		)
	}
}

export default Ocean;