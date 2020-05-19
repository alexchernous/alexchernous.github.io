/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
// import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

const highlightColor = '#E09E3B';

// dark/light theme options through themecontext
class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div style={{
          display: 'flex',
          width: '100%',
        }}>
          <Header highlightColor={highlightColor} />
        </div>

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
