/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAndroid, faPython } from '@fortawesome/free-brands-svg-icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    margin: 'auto',
  },
  img: {
    margin: 'auto',
    display: 'block',
    fontSize: '100px',
  },
}));

export default function ProjectGrid() {
  const classes = useStyles();
  const highlightColor = '#E09E3B';
  const xsSizeItem = 7;
  // const xsSizeRow = 10;
  const spacing = 2;
  const rowJustify = 'center';

  return (
    <div className={classes.root} spacing={0}>
      <Grid container spacing={spacing} justify={rowJustify}>
        <Grid item xs={xsSizeItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item>
                <a href='https://github.com/alexchernous/alexchernous.github.io/tree/source' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faReact} color={highlightColor} className={classes.img} />
                </a>
              </Grid>
              <Grid item xs>
                <h4>
                <a href='https://github.com/alexchernous/alexchernous.github.io/tree/source' target='_blank' rel='noopener noreferrer'>
                  Website Portfolio
                  <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                </a>
                </h4>
                <p>This webpage you're on was put together to demonstrate primarily some
                  React/Bootstrap knowledge and act as my personal portfolio.
                </p>
                <p>Using <b>React, Bootstrap,</b> and other libraries that can be found in
                  package.json on GitHub.
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={xsSizeItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item>
                <a href='https://github.com/alexchernous/ParkMe' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faAndroid} color={highlightColor}
                    className={classes.img} />
                </a>
              </Grid>
              <Grid item xs>
                <h4>
                  <a href='https://github.com/alexchernous/ParkMe' target='_blank' rel='noopener noreferrer'>
                    Parking App
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h4>
                <p>An ongoing project to map free parking streets of Toronto.
                </p>
                <p>Using <b>Android Studio (Kotlin), Google Maps/Places APIs</b>.
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={xsSizeItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item>
                <a href='https://github.com/alexchernous/NaturalLanguagePrediction' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faPython} color={highlightColor} className={classes.img} />
                </a>
              </Grid>
              <Grid item xs>
                <h4>
                  <a href='https://github.com/alexchernous/NaturalLanguagePrediction' target='_blank' rel='noopener noreferrer'>
                    Natural Language Prediction
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h4>
                <p>Single word and sentence prediction from a statistical language model using
                  a 2nd order (and 1st order where applicable) <b>Markov Model</b> approach.</p>
                <p>Using <b>Python</b> and supporting libraries like regex, math, and numpy.</p>
                <p>Literature used to train models: A Tale of Two Cities from
                  <b> Project Gutenberg.</b></p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={xsSizeItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item>
                <a href='https://github.com/alexchernous/SentimentAnalysis' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faPython} color={highlightColor} className={classes.img} />
                </a>
              </Grid>
              <Grid item xs>
                <h4>
                  <a href='https://github.com/alexchernous/SentimentAnalysis' target='_blank' rel='noopener noreferrer'>
                    Sentiment Analysis
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h4>
                <p>Rudimenatry sentiment analysis. <b>SVM Machine Learning</b> algorithm trained on
                  synthetic sentences containing smile and frown emojis to gauge sentiment
                  (positive, negative, neutral).
                </p>
                <p>Using <b>Python</b> and its <b>Machine Learning</b> libraries.</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
