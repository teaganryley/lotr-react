import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './routes/home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#ffdc73',
    },
    /*
    secondary: {
      main: '',
    },
    background: {
      default: '',
    },
    // type: 'light',
    */
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
