/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faReact, faAndroid, faPython, faHtml5 } from '@fortawesome/free-brands-svg-icons';
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
    // color: theme.palette.text.secondary
    color: '#b6b8bb',
    margin: 'auto',
    backgroundColor: '#343a40',
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
              <Grid item>
                <h4>Who I am</h4>
                <p>I like technology, my name's Alex Chernous.</p>
                <h4>What I want to do</h4>
                <p>Ultimately I'd like to build and deliver products for people who want to use them. If any contribution I provide helps make the final product easier and/or more enjoyable to use, that's a win. I value the user experience and am most happy when I'm in an environment that values the same.</p>
                <h4>Where I want to do it</h4>
                <p>I'm primarily looking to grow my career in Software Engineering.</p>
                <p>My personal interests and educational background have contributed to my interest in AI and/or NLP related engineering. However, as this webpage suggests, I have no problem exploring other technical areas as well.</p>
                <p>My first job out of university gave me an opportunity to work in the AI and NLP field as a UX Conversational Designer (experience and responsibilities outlined in 'Resume'). This position fit nicely with my Linguistics background. As time went on it also gave me a chance to display my Computer Science knowledge by acting as an Application Developer on similar types of projects that I designed.</p>
                <p>Receiving this experience opened my eyes to two important areas of the field and made me appreciate the intricacies of the development process as a whole.</p>
                <h4>Personal interests</h4>
                <p>Science fiction is my main area of interest in almost any media - books, movies, games etc. I'll always have a sweet spot for space, robots, aliens, and technology.</p>
                <p>A close second is ancient history and civilizations. If you're in the same boat, then I definitely recommend checking out Graham Hancock's Fingerprints of the Gods.</p>
                <p>Also video games!</p>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
