/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Banner from './Banner';
import NavBar from './NavBar';

// dark/light theme options through themecontext (?)
const App = () => (
  <HashRouter basename='/'>
    <NavBar />
    <Banner />
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/projects' />} />
      <Route path='/projects' render={() => <Projects />} />
      <Route path='/resume' render={() => <Resume />} />
      <Route path='/about' render={() => <About />} />
    </Switch>
  </HashRouter>
);

export default App;
