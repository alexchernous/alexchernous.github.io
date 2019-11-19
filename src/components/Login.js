import React, { Component } from "react";
import Radium from "radium";
import Callout from "react-callout-component";
import CalloutContent from "./CalloutContent";
import { appDefaultThemes } from "./theme-context";
import { Redirect } from "react-router-dom";

// ThemeContext?

class Login extends Component {
  _isMounted = false;

  constructor(props){
    super(props);

    this.state = {
      formPressed : false,
      form : null,
      redirectOnLogin : false,
    };

    this.loginForm = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.closeCallout = this.closeCallout.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.setState({
        form: this.loginForm.current
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSubmit(event) {
    if (this._isMounted) {
      this.setState({ redirectOnLogin : true });
      this.props.updateLoginStatus(true, event.target.name.value);
    }

    //prevents refresh
    event.preventDefault();
  }

  handleClick() {
    if (this._isMounted) {
      this.setState({formPressed : true});
    }
  }

  closeCallout() {
    if (this._isMounted) {
      this.setState({formPressed : false});
    }
  }
  
  render() {

    const text = "Form isn't a controlled component - want to avoid storing plain text info in state";

    const redirectOnLogin = this.state.redirectOnLogin;
    if (redirectOnLogin) {
        return <Redirect to="/" />
    }

    return(
      <div 
        style={{
          display: "grid",  
          justifyContent: "center", 
          color: "black",
          textAlign: "center",
          background: "rgb(234, 234, 235)",
          margin: "0px",
          padding: "0px",
          height: "50%",
          width: "100%"
          }}
      >
        <h1 style={{marginTop: "50px", fontWeight: "700", fontSize: "40px"}}>Login</h1>
        <h3 style={{fontWeight: "100"}}>Enter your dummy credentials below</h3>

        <form 
          ref={this.loginForm} 
          onClick={this.handleClick} 
          onSubmit={this.handleSubmit}
          style={{
            height: "100%",
            width: "100%",
            display: "grid",
            margin: "5px",
            padding: "0px",
            gridGap: "10px"
          }}
        >
          <label style={appDefaultThemes["labelStyle"]}>
            Name
            <input name="name" key="name" style={appDefaultThemes["inputStyle"]} type="text" placeholder="Name is required" required  />
          </label>
          <label style={appDefaultThemes["labelStyle"]}>
            Password
            <input key="password" style={appDefaultThemes["inputStyle"]} type="password" placeholder="Password is required" required />
          </label>
          <input 
            style={
              [appDefaultThemes["buttonBase"], appDefaultThemes["submit"]]} 
            type="submit" value="Log me in"/>
        </form>

        {/* <Callout 
          isVisible={this.state.formPressed} 
          parentElement={this.state.form} 
          side="bottom"
          color="rgb(52, 58, 64)"
        >

          <CalloutContent content={text} closeCallout={this.closeCallout} />
        </Callout> */}
      </div>
    );
    
  }
}

export default Radium(Login);