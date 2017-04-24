import React, { Component } from 'react';
import axios from 'axios';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import store from './../store/Store.js';
import Home from './Home.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}


export default App;
