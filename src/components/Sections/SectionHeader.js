import React from 'react'

import Typography from '@material-ui/core/Typography';

export default (props) => {
    return (
        <div>
            <Typography gutterBottom variant="h5">
                {props.label}
            </Typography>
        </div>
    )
}