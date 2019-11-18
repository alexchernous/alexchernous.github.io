import React, { Component } from "react";
import Radium from "radium";
import Menu from "./Menu";
import Main from "./Main";
import Projects from "./Projects";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Login from "./Login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {

  render(){
      return (
        
        <Router>
          <Menu />
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/about" component={AboutMe} />
            <Route path="/login" component={Login} />

          </Switch>
        </Router>
      
      );
    }
}

export default Radium(App);
