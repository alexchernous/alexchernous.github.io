import React, { Component } from 'react';
import App from './App';
import Login from './Login';

class Start extends Component {
  constructor(){
    super();

    this.state = {
      isLoggedIn: false
    }
    this.login = this.login.bind(this);

    console.log(this.state.isLoggedIn);
  }

  login(isLoggedIn) {
    console.log(this.state.isLoggedIn, isLoggedIn);
    this.setState({isLoggedIn: isLoggedIn});
  }

  render () {
    return (
      <div>{this.state.isLoggedIn ? <App login={this.login} /> : <Login login={this.login} />}</div>
    );
  }
}

export default Start;