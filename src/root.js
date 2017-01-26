import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { listenToAuth } from './actions/auth';

import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class root extends Component {

  componentWillMount()  {
		store.dispatch(listenToAuth());
	}

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }

}
