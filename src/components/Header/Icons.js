import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <a href="https://github.com/charlesmarquez" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize='large' color='action'/>
            </a>

            <a href="https://www.instagram.com/charlesxmarquez/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize='large' color='action'/>
            </a>

            <a href="https://www.linkedin.com/in/charles-marquez/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize='large' color='action'/>
            </a>
        </div>
    )
}

