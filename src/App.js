import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Main from './Main';

//do themes
const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
  //header styles
  //footer styles
}));

function App() {
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="sm">
      <h2>This is a lotr page.</h2>
      <Main />
    </Container>
  );
}

export default App;
