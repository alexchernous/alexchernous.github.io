import React, { Component } from 'react';
import './App.css';
import App from './App';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      name: 'John Doe',
      nameFieldFirstClick: false,
      password: 'Password123',
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

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({[name]: value});
  }

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
    <div className="Login">
      <h1>Login</h1>
      <h3>Enter your dummy credentials below</h3>
      
      <form className="Login-form" onSubmit={this.handleSubmit}>
        <label>
          Your name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} onClick={this.handleClick} />
        </label>
        <label>
          Your password:
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} onClick={this.handleClick} />
        </label>
        <input className='button' type="submit" value="Submit" />
      </form>
    </div>
    );
  }
}


export default Login;