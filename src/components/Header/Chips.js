import React from 'react'

import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.7),
    },
  },
}));


const Chips = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Chip variant="outlined" size="small" label="Software Developer" />
            <Chip variant="outlined" size="small" label="Electrical Engineer" />
            <Chip variant="default" size="small" label="Available for Hire" />
        </div>
    )
}

export default Chips
