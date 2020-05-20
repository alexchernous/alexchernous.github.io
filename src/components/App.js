/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Banner from './Banner';


const highlightColor = '#E09E3B';

// dark/light theme options through themecontext
class App extends Component {
  constructor(props) {
    super(props);

    // this is in place for potential sticky banners... for now doesn't work
    // this.state = {
    //   bannerSize: null,
    // };

    // this.updateBannerSize = this.updateBannerSize.bind(this);
  }

  // updateBannerSize(bannerSize) {
  //   this.setState({ bannerSize });
  // }

  render() {
    return (
      <HashRouter basename='/'>
        <Header highlightColor={highlightColor} />
        <Banner highlightColor={highlightColor} />
        <Switch>
          <Route exact path='/' render={() => <Projects highlightColor={highlightColor} />} />
          <Route path='/projects' render={() => <Projects highlightColor={highlightColor} />} />
          <Route path='/resume' render={() => <Resume highlightColor={highlightColor} />} />
          <Route path='/about' render={() => <About highlightColor={highlightColor} />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
