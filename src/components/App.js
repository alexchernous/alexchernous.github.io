import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Login from "./Login";

//dark/light theme options through themecontext
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "anonymous",
      isLoggedIn: false,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(isLoggedIn, userName) {
    this.setState({ isLoggedIn: isLoggedIn, userName: userName });
  }

  logout() {
    this.setState({ isLoggedIn: false, userName: "anonymous" });
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
              <Route path="/login" render={() => <Login login={this.login} />} />
              <Redirect exact from="/" to="/home" />
              <Redirect exact from="/logout" to="/" />
            </Switch>
          </Router>
      );
    }
}

export default App;