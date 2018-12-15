import React from 'react';
import styles from '../App.css';

import { Grid } from '@material-ui/core';

import AppContainer from '../containers/AppContainer';
import ImageCreator from './ImageCreator/ImageCreator';
import ListContainer from '../containers/ListContainer';


const App = () => (
  <AppContainer>
    <Grid item xs={12}>
      <ImageCreator title="Create a new image"/>
    </Grid>
          
    <Grid container justify="center" spacing="24">
      <ListContainer />
    </Grid>
  </AppContainer>
);

export default App;
