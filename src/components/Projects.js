/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faAndroid,
  faPython,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WebsiteContent from '../content/WebsiteContent';
import ParkMeContent from '../content/ParkMeContent';
import NLPContent from '../content/NLPContent';
import SentimentContent from '../content/SentimentContent';
import WisdomunityContent from '../content/WisdomunityContent';
import constants from '../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '8px',
    position: 'absolute',
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    margin: 'auto',
    backgroundColor: '#d7d8d9',
    color: '#343a40',
  },
  img: {
    margin: 'auto',
    display: 'block',
    fontSize: '100px',
  },
  visual: {
    textAlign: 'center',
  },
}));

const ProjectGrid = () => {
  const classes = useStyles();
  const projectData = [{
    img: faReact,
    title: 'Website Portfolio',
    href: 'https://github.com/alexchernous/alexchernous.github.io/tree/source',
    date: '10/2019++',
    content: <WebsiteContent />,
  }, {
    img: faFigma,
    title: 'Wisdomunity - Google Design Challenge',
    href: 'https://www.figma.com/file/5zSuBLN6yrMUE7F9DmbUtv/Wisdomunity-Google-UX-design-exercise-2020?node-id=0%3A1',
    date: <p>02/2020</p>,
    content: <WisdomunityContent />,
  }, {
    img: faAndroid,
    title: 'ParkMe',
    href: 'https://github.com/alexchernous/ParkMe',
    date: '02/2020++',
    content: <ParkMeContent />,
  }, {
    img: faPython,
    title: 'Natural Language Prediction',
    href: 'https://github.com/alexchernous/NaturalLanguagePrediction',
    date: <p>11/2018 - <br></br>01/2019</p>,
    content: <NLPContent />,
  }, {
    img: faPython,
    title: 'Sentiment Analysis',
    href: 'https://github.com/alexchernous/SentimentAnalysis',
    date: <p>01/2019 - <br></br>03/2019</p>,
    content: <SentimentContent />,
  }];

  const highlightColor = constants.colors.orange;
  const gridNumbers = {
    xs: 12,
    md: 8,
    lg: 7,
    spacing: 2,
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={gridNumbers.spacing} justify='center' direction='row'>
      {projectData.map((tile) => (
        <Grid key={tile.title} item xs={gridNumbers.xs} md={gridNumbers.md} lg={gridNumbers.lg}>
          <Paper className={classes.paper}>
            <Grid container spacing={gridNumbers.spacing}>
              <Grid item className={classes.visual}>
                <Grid item>
                  <a href={tile.href} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={tile.img} color={highlightColor}
                      className={classes.img} />
                  </a>
                </Grid>
                <Grid item>
                  {tile.date}
                </Grid>
              </Grid>
              <Grid item xs>
                <h3>
                  <a href={tile.href} target='_blank' rel='noopener noreferrer'>
                    {tile.title}
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h3>
                {tile.content}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
      </Grid>
    </div>
  );
};

export default ProjectGrid;
