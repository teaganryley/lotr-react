import { createMuiTheme } from '@material-ui/core/styles';

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

export default theme;
