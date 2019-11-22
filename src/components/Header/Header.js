import React from 'react'

import Typography from '@material-ui/core/Typography';

import Chips from './Chips'
import Icons from './Icons'

export default () => {
    return (
        <div>
            <Typography gutterBottom variant="h2">
            Charles Marquez
            </Typography>
            
            <Chips/>
            <Icons/>
        </div>
    )
}