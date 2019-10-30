import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Login from "./Login";
import Footer from "./Footer";
import ContentContainer from "./ContentContainer";

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
          <Menu updateKey={this.updateKey} />
          <ContentContainer list={this.state.content} index={this.state.key} />
          <Footer />
        </div>
      );
    }
    
    return (
      <Login updateLoginStatus={this.updateLoginStatus} />
    );

    
  }
}

export default App;
