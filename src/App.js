import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import SecondFactor from './containers/SecondFactor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
        <h1 class="display-3">Strong authentication</h1>
      </div>
        <Provider store={store}>
            <SecondFactor/>
        </Provider>
      </div>
    );
  }
}

export default App;
