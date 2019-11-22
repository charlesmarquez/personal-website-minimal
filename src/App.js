import React from 'react';
import './App.css';
import 'typeface-roboto';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Header from './components/Header/Header';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    marginRight: theme.spacing(1),
  },
  header: {
    margin: theme.spacing(3),
  },
  section: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      
      <div className={classes.header}>
        <Header/>
      </div>
      <Divider variant='middle'/>

      <div className={classes.section}>
        <Projects/>
      </div>
      <Divider variant='middle'/>

      <div className={classes.section}>
        <Skills/>
      </div>
      <Divider variant='middle'/>
            
      

    </div>
  );
}

export default App;
