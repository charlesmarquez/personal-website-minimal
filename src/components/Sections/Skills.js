import React from 'react'
import SectionHeader from './SectionHeader'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'inline',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

const skillList = [
    {
        label: "Software Languages",
        desc: "JavaScript, Python, MATLAB, PHP, SQL"
    },
    {
        label: "Web Technologies",
        desc: "Reactjs, GraphQL, MongoDB, Express.js, Node.js, Socket.io, HTML5/CSS, jQuery, SQL"
    },
    {
        label: "Responsive Frameworks / Packages",
        desc: "Material UI, React Bootstrap, Tailwind CSS, Numpy, Scipy, Matplotlib "
    },
    {
        label: "APIs / Services",
        desc: "Google APIs, Twitter, AWS, Halo Developer Portal"
    },
    {
        label: "Other",
        desc: "Git, Bash, Windows, Linux, Raspi, Microsoft Office"
    }
]

const SkillLine = (props) => {
    const classes = useStyles();
    
    return (
        <div>
        <Typography className={classes.root} variant="overline" gutterBottom>
            <b>{props.label}:</b> 
        </Typography>
            {props.desc} 
        </div>
    )
}

const Skills = () => {
    return (
        <div>
            <SectionHeader label='Technical Skills'/>
            {skillList.map(skill => <SkillLine label={skill.label} desc={skill.desc}/>)}       
        </div>
    )
}



export default Skills
