/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ProjectGrid from './ProjectGrid';
import Resume from './Resume';
import AboutMe from './AboutMe';

// dark/light theme options through themecontext
class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div style={{
          display: 'flex',
          width: '100%',
        }}>
          <Header />
        </div>

        <Switch>
          <Route exact path='/' component={ProjectGrid} />
          <Route path='/projects' component={ProjectGrid} />
          <Route path='/resume' component={Resume} />
          <Route path='/about' component={AboutMe} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
