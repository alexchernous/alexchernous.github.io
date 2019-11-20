import React, { Component } from "react";
import Radium from "radium";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Login from "./Login";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

//color for accents #e0a800

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName : 'anonymous',
      isLoggedIn : false,
    };

    this.updateLoginStatus = this.updateLoginStatus.bind(this);
    this.logOut = this.logOut.bind(this);

  }

  updateLoginStatus(loginStatus, user) {
    this.setState({ isLoggedIn : loginStatus, userName : user });
  }

  logOut() {
    this.setState({ isLoggedIn : false, userName : "anonymous" });
  }

  render(){
      return (
          <Router>
            <Header isLoggedIn={this.state.isLoggedIn} userName={this.state.userName} />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/about" component={AboutMe} />
              <Route path="/login" render={() => <Login updateLoginStatus={this.updateLoginStatus} logOut={this.logOut} />} />
              
              <Redirect exact from="/" to="/home" />
              <Redirect exact from="/logout" to="/" />
            </Switch>
            
            <Footer />
          </Router>
      );
    }
}

export default Radium(App);
