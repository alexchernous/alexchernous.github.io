/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AboutContent from '../content/AboutContent';
import SourcesCredits from './SourcesCredits';
import Books from './Books';
import Hobbies from './Hobbies';


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
}));

export default function Projects(props) {
  const classes = useStyles();
  const content = [
    {
      title: 'About',
      component: <AboutContent />,
    },
    {
      title: 'Resume',
      component: <Hobbies highlightColor={props.highlightColor} />,
    },
    {
      title: 'About Me',
      component: <Books />,
    },
  ];

  return (
    <div className={classes.root}>
      {content.map((tile) => (
        <Grid key={tile.title} container spacing={2} justify='center' direction='row'>
          <Grid item xs={12} md={8} lg={7}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  {tile.component}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      ))}
      <SourcesCredits highlightColor={props.highlightColor} />
    </div>
  );
}
