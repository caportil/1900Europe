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
		<div>

<<<<<<< HEAD
			<img src={`${self.props.src}.png`}
			  class={self.props.class}
			  alt="" 
			  useMap={`#${self.props.class}Map`}
			  style=
			  	{{position: 'absolute', 
		    	  left: `${Number(self.props.left) + 100}px`,
		    	  top: `${Number(self.props.top) + 200}px`,
		    	  // left: '100px',
		    	  // top: '200px',
		    	  filter: `hue-rotate(${self.toggleHue()}deg) opacity(45%) opacity(70%)`
				}} 
			/>
=======
		<img src=""
		  class={self.props.class}
		  useMap="#combinedMap"
		  style=
		  	{{position: 'absolute', 
	    	  left: '100px', 
	    	  top: '200px', 
	    	  width: '1011px', 
	    	  height: '645px',
	    	  background: `url(${self.props.src}.png) 0px ${self.props.occupiedOcean.indexOf(self.props.class) > -1 ? '0px' : '-645px'}`,
	    	  filter: `opacity(50%)`
			}} 
		/>
>>>>>>> Complete converting ocean tiles to sprites

			<map name={`${self.props.class}Map`}>
				<area 
					class={self.props.class} 
					alt="" 
					title="" 
					nohref="nohref" 
					shape="poly" 
					coords={self.props.coords2}
					style={{cursor: 'default'}}
					onClick={() => self.props.toggleOccupiedOcean(self.props.class) }
				/>
 			</map>

		</div>
		)
	}
}

export default Ocean;