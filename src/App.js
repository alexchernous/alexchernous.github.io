import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
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
    };

    this.updateKey = this.updateKey.bind(this);
  }

  updateKey(newKey) {
    this.setState({
      key: newKey,
    });
  }

  render(){
    const userName = this.props.userName;
    const welcomeMessage = userName ? (", " + userName + "!") : "!";

    return (
      <div className="App">
        <Header welcomeMessage={welcomeMessage} />
        <Menu updateKey={this.updateKey} />
        <ContentContainer list={this.state.content} index={this.state.key} />
        <Footer />
      </div>
    );
  }
}

export default App;
