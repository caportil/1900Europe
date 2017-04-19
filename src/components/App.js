import React, { Component } from 'react';
import axios from 'axios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import store from './../store/Store.js';
import Home from './Home.js';

class App extends Component {
	constructor(props) {
		super(props);
		let self = this;
		this.state = {
		}
	}

  componentWillMount() {
  	console.log('Running componentWillMount');
  }

  componentDidMount() {
  	console.log('Finished mounting')
  }

  componentDidUpdate() {
  	let self = this;
  	console.log('Finished rendering...')
  }

  render() {
	let self = this;
	// console.log('Rendering in App.js... Countries currently are:', self.state, 'and self.state.altSprite is:', self.state.altSprite)
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}


export default App;
