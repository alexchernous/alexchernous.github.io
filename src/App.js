import React, { Component } from "react";
import Radium from "radium";
import Header from "./Header";
import Menu from "./Menu";
import Login from "./Login";
import Footer from "./Footer";
import ContentContainer from "./ContentContainer";
import TextBox from "./TextBox";
import {ThemeContext, appDefaultThemes} from './theme-context';


/**
 * figure out how to use routers for different pages
 */

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      key: "Welcome",
      content: {
        "Welcome": "Welcome to my page",
        "About": "About me",
        "Resume": "Comp Sci",
      },
      isLoggedIn: false,
      userName: "",
    };

    

    this.updateLoginStatus = this.updateLoginStatus.bind(this);
    this.updateKey = this.updateKey.bind(this);
  }

  /* maybe can use context here */
  updateKey(newKey) {
    this.setState({
      key: newKey,
    });
  }

  updateLoginStatus(loginStatus, name) {
    this.setState({
      isLoggedIn: loginStatus,
      userName: name
    });
  }

  render(){
    if (this.state.isLoggedIn){

      const welcomeMessage = this.state.userName ? (", " + this.state.userName + "!") : "!";

      return (
        <div className="App">
          <Header welcomeMessage={welcomeMessage} />

          <ThemeContext.Provider value={appDefaultThemes}>
            <Menu updateKey={this.updateKey} />
          </ThemeContext.Provider>

          <ContentContainer list={this.state.content} index={this.state.key} />
          <TextBox />
          <Footer />
        </div>
      );
    }
    
    return (
      <Login appDefaultThemes={appDefaultThemes} updateLoginStatus={this.updateLoginStatus} />
    );

    
  }
}

export default Radium(App);
