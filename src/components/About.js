/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Nav } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AboutContent from '../content/AboutContent';
// import Typography from '@material-ui/core/Typography';

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
}));

const sitesData = [
  {
    img: faGithub,
    href: 'https://github.com/alexchernous',
  },
  {
    img: faLinkedin,
    href: 'https://www.linkedin.com/in/alexchernous',
  },
];

export default function Projects(props) {
  const classes = useStyles();
  const navLinkStyle = {
    fontSize: '50px',
    transition: '0.25s',
  };

  return (
    <div className={classes.root}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        {sitesData.map((tile) => (
          <Nav.Link href={tile.href} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={tile.img} color={props.highlightColor} style={navLinkStyle} />
          </Nav.Link>
        ))}
      </div>
      <Grid container spacing={2} justify='center' direction='row'>
        <Grid item xs={12} md={8} lg={7}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <AboutContent />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
