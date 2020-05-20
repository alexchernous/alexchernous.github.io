/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Nav } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AlexPhoto from '../content/images/AlexPhoto.png';


const styles = {
  navLinkStyle: {
    transition: '0.25s',
    margin: '0px',
    padding: '0px',
  },
  paperBannerStyle: {
    flexGrow: 1,
    paddingTop: '8px',
    textAlign: 'left',
    margin: 'auto',
    color: '#d7d8d9',
    backgroundColor: '#343a40',
  },
  bannerItemStyle: {
    marginTop: 'auto',
    padding: '10px',
    margin: 'auto',
  },
};

const sitesData = [
  {
    img: faGithub,
    title: 'Git',
    href: 'https://github.com/alexchernous',
  },
  {
    img: faLinkedin,
    title: 'LI',
    href: 'https://www.linkedin.com/in/alexchernous',
  },
];

class Banner extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.updateBannerSize(document.querySelector('#banner').clientHeight);
  }

  render() {
    return (
      <React.Fragment>
        <Grid id='banner' container spacing={2} justify='center' direction='row' style={{ position: 'absolute', top: '55px' }}>
          <Grid item xs={12} md={8} lg={7}>
            <Paper style={styles.paperBannerStyle}>
              <Grid container spacing={0}>
                <Grid item style={styles.bannerItemStyle}>
                  <Avatar alt="Alex Chernous" src={AlexPhoto} style={{ height: '100px', width: '100px' }} />
                </Grid>
                <Grid item style={styles.bannerItemStyle}>
                  <h3>Alex Chernous</h3>
                </Grid>
                <Grid item style={styles.bannerItemStyle}>
                  <h4>|</h4>
                </Grid>
                <Grid item style={styles.bannerItemStyle}>
                  <h4>Find me on...</h4>
                </Grid>
                {sitesData.map((tile) => (
                  <Grid key={tile.title} item style={styles.bannerItemStyle}>
                    <Nav.Link href={tile.href} target='_blank' rel='noopener noreferrer' style={styles.navLinkStyle}>
                      <FontAwesomeIcon icon={tile.img} color='#d7d8d9'
                        style={{ fontSize: '50px', ...styles.navLinkStyle }} />
                    </Nav.Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Banner;
