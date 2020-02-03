import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Login from "./Login";
import LoginStatus from "./LoginStatus";
import LoginStatusAlert from "./LoginStatusAlert";

//dark/light theme options through themecontext
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "user",
            isLoggedIn: false,
            showAlert: false,
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
    }

    login(userName) {
        this.setState({ isLoggedIn: true, userName: userName, showAlert: true });
    }

    logout() {
        this.setState({ isLoggedIn: false, userName: "user", showAlert: true });
    }

    closeAlert() {
        this.setState({ showAlert: false });
    }

    render() {
        return (
            <HashRouter basename='/'>
                <div style={{
                    display: "flex",
                    width: "100%"
                }}>
                    <Header />
                    <LoginStatus isLoggedIn={this.state.isLoggedIn} userName={this.state.userName} logout={this.logout} />
                </div>

                {this.state.showAlert &&
                    <LoginStatusAlert isLoggedIn={this.state.isLoggedIn} closeAlert={this.closeAlert} />
                }

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/about" component={AboutMe} />
                    <Route path="/login" render={() => <Login login={this.login} />} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;