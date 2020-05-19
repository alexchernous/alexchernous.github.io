/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAndroid, faPython } from '@fortawesome/free-brands-svg-icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WebsiteContent from '../content/WebsiteContent';
import ParkMeContent from '../content/ParkMeContent';
import NLPContent from '../content/NLPContent';
import SentimentContent from '../content/SentimentContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '8px',
    position: 'absolute',
    top: '65px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#343a40',
    margin: 'auto',
    backgroundColor: '#343a401a',
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

const projectData = [
  {
    img: faReact,
    title: 'Website Portfolio',
    href: 'https://github.com/alexchernous/alexchernous.github.io/tree/source',
    date: '10/2019++',
    content: <WebsiteContent />,
  },
  {
    img: faAndroid,
    title: 'ParkMe',
    href: 'https://github.com/alexchernous/ParkMe',
    date: '02/2020++',
    content: <ParkMeContent />,
  },
  {
    img: faPython,
    title: 'Natural Language Prediction',
    href: 'https://github.com/alexchernous/NaturalLanguagePrediction',
    date: <p>11/2018 - <br></br>01/2019</p>,
    content: <NLPContent />,
  },
  {
    img: faPython,
    title: 'Sentiment Analysis',
    href: 'https://github.com/alexchernous/SentimentAnalysis',
    date: <p>01/2019 - <br></br>03/2019</p>,
    content: <SentimentContent />,
  },
];

export default function ProjectGrid(props) {
  const classes = useStyles();
  const { highlightColor } = props;
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
        <Grid item xs={gridNumbers.xs} md={gridNumbers.md} lg={gridNumbers.lg}>
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
}
