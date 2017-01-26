import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
// eslint-disable-next-line
import rtep from './rtep';
import Auth from './components/auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        This is app
        <button
          onClick={
            () => {
              this.props.dispatch({
                type: 'USER_FETCH_REQUESTED',
                userId: 1
              });
            }
          }
        >
          Fetch user
        </button>
      </div>
    );
  }
}

App = connect()(App);

export default App;
