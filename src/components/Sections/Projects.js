import React from 'react'

import SectionHeader from './SectionHeader'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'inline',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

const projectList = [
    {
        title: "Halo Wars 2 Tracker",
        desc: "Tracks recent activity of players on the leaderboards.",
        url: "https://charlesmarquez.github.io/player-tracker/",
        repo: "https://github.com/charlesmarquez/halowars-tracker/"
    },
    {
        title: "Wizard Chess",
        desc: "Voice Controlled Chess Application. ",
        url: "",
        repo: "https://github.com/menushka/wizardchess-capstone"
    },
    {
        title: "API Key Handler",
        desc: "Priority queue for managing multiple keys to an API.",
        url: "",
        repo: "https://github.com/charlesmarquez/API-Key-Priority-Queue"
    }
]

// window.open

const ProjectLine = (props) => {
    const classes = useStyles();

    return (
        <div>
        {/* <Divider light/> */}
        <Typography className={classes.root} variant="overline" gutterBottom>
            <div>
                <b>{props.title}</b> | {props.desc}
            </div>
                <ProjectLink url={props.url}/>
                <GithubLink repo={props.repo}/>
        </Typography>
        </div>
    )
}

const ProjectLink = (props) => {
    if (props.url) {
        return (
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <LinkIcon color='action'/>
            </a>
        )
    } else {
        return (
            <div></div>
        )
    }
}


const GithubLink = (props) => {
    if (props.repo) {
        return (
            <a href={props.repo} target="_blank" rel="noopener noreferrer">
                <GitHubIcon color='action'/>
            </a>
        )
    } else {
        return (
            <div></div>
        )
    }
}
const Projects = () => {
    const classes = useStyles();

    return (
        <div>
        <SectionHeader label="Projects"/>
            <div className={classes.root}>
                {projectList.map(project => <ProjectLine title={project.title} desc={project.desc} url={project.url} repo={project.repo}/>)}
            </div>
        </div>
    )
}

export default Projects
