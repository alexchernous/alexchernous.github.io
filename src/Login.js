import React, { Component } from "react";
import arrow from "./arrow-up.png";
import "./Login.css";
import "./Explanations.css";
import App from "./App";

class Login extends Component {
  constructor(){
    super();

    this.state = {
      name: "",
      formPressed: false,
      // nameFieldFirstClick: false,
      // passwordFieldFirstClick: false,
      isLoggedIn: false
    }

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    this.setState({isLoggedIn: true});
    this.setState({name: event.target.name.value});
  }

  /* use as example for a field on the next page, not for login */
  // handleChange(event) {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   this.setState({[name]: value});
  // }

  /* use as example for a field on the next page, not for login */
  handleClick() {
    this.setState({formPressed : true});
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
      <div>
        <div className="Login-wrapper">
          <h1>Login</h1>
          <h3>Enter your dummy credentials below</h3>

          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input type="text" name="name" placeholder="Name is required" required onClick={this.handleClick} />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="Password is required" required onClick={this.handleClick}/>
            </label>
            <input type="submit" value="Log me in"/>
          </form>
        </div>
        {
          this.state.formPressed &&
          <div className="tooltip">
            <img src={arrow} />
            <p className="tooltip-message">Form is not a controlled component since we don't want to store this info in plain text</p>
          </div>
        }
      </div>
      
    );
    
  }
}


export default Login;