import React, { Component } from 'react';
import './Login.css';
import App from './App';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      nameFieldFirstClick: false,
      password: '',
      passwordFieldFirstClick: false,
      isLoggedIn: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit() {
    this.setState({isLoggedIn: true});
  }

  /* use as example for a field on the next page, not for login */
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({[name]: value});
  }

  /* use as example for a field on the next page, not for login */
  handleClick(event) {
    const name = event.target.name;
    const clickParam = event.target.name + "FieldFirstClick";

    if(!this.state[clickParam]){
      this.setState({[name]:''});
    }
    this.setState({[clickParam] : true});
  }
  
  render() {
    if(this.state.isLoggedIn){
      return(
        <div>
          <App userName={this.state.name}/>
        </div>
      );
    }

    return(
    <div className="Login-wrapper">
      <h1>Login</h1>
      <h3>Enter your dummy credentials below</h3>
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={this.state.name} placeholder="Name is required" required onChange={this.handleChange} onClick={this.handleClick} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={this.state.password} placeholder="Password is required" required onChange={this.handleChange} onClick={this.handleClick} />
        </label>
        <input type="submit" value="Log in" />
      </form>
    </div>
    );
  }
}


export default Login;