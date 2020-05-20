/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: '8px',
  },
  panel: {
    backgroundColor: '#343a40',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#d7d8d9',
  },
}));

export default function SourcesCredits(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel square={true} className={classes.panel}>
        <ExpansionPanelSummary className={classes.heading}
          expandIcon={<ExpandMoreIcon style={{ color: props.highlightColor }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={classes.heading}>Sources and Credits</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.heading}>
            Caves of Steel: <a href='https://images-na.ssl-images-amazon.com/images/I/91jHy1iF6+L.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/91jHy1iF6+L.jpg</a><br></br>
            The Naked Sun: <a href='https://images-na.ssl-images-amazon.com/images/I/91EroEcsidL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/91EroEcsidL.jpg</a><br></br>
            The Robots of Dawn: <a href='https://images-na.ssl-images-amazon.com/images/I/91s+oCeDPvL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/91s+oCeDPvL.jpg</a><br></br>
            Robots and Empire: <a href='https://images-na.ssl-images-amazon.com/images/I/51as+9goe9L._SX310_BO1,204,203,200_.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/51as+9goe9L._SX310_BO1,204,203,200_.jpg</a><br></br>
            Foundation: <a href='https://images-na.ssl-images-amazon.com/images/I/811zq+9+hNL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/811zq+9+hNL.jpg</a><br></br>
            Foundation and Empire: <a href='https://images-na.ssl-images-amazon.com/images/I/81d5B5LpPIL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/81d5B5LpPIL.jpg</a><br></br>
            Second Foundation: <a href='https://images-na.ssl-images-amazon.com/images/I/81Y-yxDRiWL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/81Y-yxDRiWL.jpg</a><br></br>
            Foundation's Edge: <a href='https://images-na.ssl-images-amazon.com/images/I/61q7WhvUfdL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/61q7WhvUfdL.jpg</a><br></br>
            Foundation and Earth: <a href='https://images-na.ssl-images-amazon.com/images/I/61ahKPvboZL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/61ahKPvboZL.jpg</a><br></br>
            Crime and Punishment: <a href='https://images-na.ssl-images-amazon.com/images/I/81b6e-dc41L.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/81b6e-dc41L.jpg</a><br></br>
            Fingerprints of the Gods: <a href='https://images-na.ssl-images-amazon.com/images/I/514XZ2R6BNL._AC._SR360,460.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/514XZ2R6BNL._AC._SR360,460.jpg</a><br></br>
            Magicians of the Gods: <a href='https://images-na.ssl-images-amazon.com/images/I/71ICYJMJfOL.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/71ICYJMJfOL.jpg</a><br></br>
            America Before: <a href='https://images-na.ssl-images-amazon.com/images/I/51VfWZh%2BpOL._SX323_BO1,204,203,200_.jpg' target='_blank' rel='noopener noreferrer'>
              https://images-na.ssl-images-amazon.com/images/I/51VfWZh%2BpOL._SX323_BO1,204,203,200_.jpg</a><br></br>
            1984: <a href='https://i.pinimg.com/originals/5e/cc/64/5ecc64ef469ae2d5d3660ca7bde44ca0.jpg' target='_blank' rel='noopener noreferrer'>
              https://i.pinimg.com/originals/5e/cc/64/5ecc64ef469ae2d5d3660ca7bde44ca0.jpg</a><br></br>
            Tuesdays with Morrie: <a href='https://images-na.ssl-images-amazon.com/images/I/9156jIzeBLL.jpg' target='_blank' rel='noopener noreferrer'>
            https://images-na.ssl-images-amazon.com/images/I/9156jIzeBLL.jpg</a><br></br>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
