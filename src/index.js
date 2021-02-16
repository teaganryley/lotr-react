import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
