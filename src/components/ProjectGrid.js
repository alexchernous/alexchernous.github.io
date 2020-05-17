/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAndroid, faPython } from '@fortawesome/free-brands-svg-icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '8px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#b6b8bb',
    margin: 'auto',
    backgroundColor: '#343a40',
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

export default function ProjectGrid() {
  const classes = useStyles();
  const highlightColor = '#E09E3B';
  const xsNumGridsItem = 12;
  const mdNumGridsItem = 8;
  const lgNumGridsItem = 7;
  const spacing = 2;

  return (
    <div className={classes.root}>
      <Grid container spacing={spacing} justify='center' direction='row'>
        <Grid item xs={xsNumGridsItem} md={mdNumGridsItem} lg={lgNumGridsItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item className={classes.visual}>
                <Grid item>
                  <a href='https://github.com/alexchernous/alexchernous.github.io/tree/source' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faReact} color={highlightColor}
                      className={classes.img} />
                  </a>
                </Grid>
                <Grid item>
                  <p>10/2019++</p>
                </Grid>
              </Grid>
              <Grid item xs>
                <h3>
                  <a href='https://github.com/alexchernous/alexchernous.github.io/tree/source' target='_blank' rel='noopener noreferrer'>
                    Website Portfolio
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h3>
                <h4>Description</h4>
                <p>
                  This webpage you're on was put together to demonstrate web concepts
                  (e.g. responsive design), technology understanding (e.g. JS / React),
                  and act as my personal portfolio.
                </p>
                <h4>Motivation</h4>
                <p>
                  Having a place on the internet that removes itself from social media sites
                  is freeing. You can create your own content & style as well as demonstrate
                  your skills while doing it.
                </p>
                <h4>Tools</h4>
                <p>
                  React, Bootstrap, Material UI and other libraries
                  that can be found in package.json on GitHub.
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={xsNumGridsItem} md={mdNumGridsItem} lg={lgNumGridsItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item className={classes.visual}>
                <Grid item>
                  <a href='https://github.com/alexchernous/ParkMe' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faAndroid} color={highlightColor}
                      className={classes.img} />
                  </a>
                </Grid>
                <Grid item>
                  <p>02/2020++</p>
                </Grid>
              </Grid>
              <Grid item xs>
                <h3>
                  <a href='https://github.com/alexchernous/ParkMe' target='_blank' rel='noopener noreferrer'>
                    Parking App
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h3>
                <h4>Description</h4>
                <p>An project, in its infancy, to map free parking streets of Toronto.
                </p>
                <h4>Motivation</h4>
                <p>
                  The city, espeically downtown, can be a nightmare for cars and parking.
                  So I wanted to tackle this problem - there's similar apps on the PlayStore
                  today, but this is my approach. Moreover, this was a great way to play
                  around with Google APIs.
                </p>
                <h4>Tools</h4>
                <p>Android Studio (Kotlin), Google Maps / Places APIs.
                </p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={xsNumGridsItem} md={mdNumGridsItem} lg={lgNumGridsItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item className={classes.visual}>
                <Grid item>
                  <a href='https://github.com/alexchernous/NaturalLanguagePrediction' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faPython} color={highlightColor}
                      className={classes.img} />
                  </a>
                </Grid>
                <Grid item>
                  <p>11/2018 - <br></br>01/2019</p>
                </Grid>
              </Grid>
              <Grid item xs>
                <h3>
                  <a href='https://github.com/alexchernous/NaturalLanguagePrediction' target='_blank' rel='noopener noreferrer'>
                    Natural Language Prediction
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h3>
                <h4>Description</h4>
                <p>Single word and sentence prediction from a statistical language model (SLM) using
                  a 2nd order (and 1st order where applicable) Markov Model approach.</p>
                <h4>Motivation</h4>
                <p>The interest came from smart phone keyboards and their word
                  completion / prediction.
                  I don't actually know the exact mechanism of how modern phones accomplish
                  this task, but I decided to use my own approach of an SLM.
                  I learned the concept of SLMs in university; however, implementing it
                  on a real world problem only sparked my imagination a couple years later.
                </p>
                <h4>Tools</h4>
                <p>Python and supporting libraries like regex, math, and numpy.</p>
                <p>Literature used to train models: A Tale of Two Cities from <a href='https://www.gutenberg.org/' target='_blank' rel='noopener noreferrer'>Project Gutenberg.</a></p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={xsNumGridsItem} md={mdNumGridsItem} lg={lgNumGridsItem}>
          <Paper className={classes.paper}>
            <Grid container spacing={spacing}>
              <Grid item className={classes.visual}>
                <Grid item>
                  <a href='https://github.com/alexchernous/SentimentAnalysis' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faPython} color={highlightColor}
                      className={classes.img} />
                  </a>
                </Grid>
                <Grid item>
                  <p>01/2019 - <br></br>03/2019</p>
                </Grid>
              </Grid>
              <Grid item xs>
                <h3>
                  <a href='https://github.com/alexchernous/SentimentAnalysis' target='_blank' rel='noopener noreferrer'>
                    Sentiment Analysis
                    <FontAwesomeIcon icon={faLink} color={highlightColor} style={{ marginLeft: '5px' }} />
                  </a>
                </h3>
                <h4>Description</h4>
                <p>Rudimenatry sentiment analysis. SVM Machine Learning algorithm trained on
                  synthetic sentences containing smile and frown emojis to gauge sentiment
                  (positive, negative, neutral).
                </p>
                <h4>Motivation</h4>
                <p>Machine learning seems to be applied everywhere
                  these days. So I decided to try and learn the basics.
                  The specific topic of sentiment analysis was sparked by my [24]7.ai workplace...
                </p>
                <h4>Tools</h4>
                <p>Python and its Machine Learning libraries.</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
