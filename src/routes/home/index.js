import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Main from '../../components/main';

/*
const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
  // header styles
  // footer styles
}));
*/

const Home = () => (
  <Container component="main" maxWidth="sm">
    <h2>This is a lotr page.</h2>
    <Main />
  </Container>
);

export default Home;
