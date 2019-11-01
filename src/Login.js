import React, { Component } from "react";
import Callout from "react-callout-component";
import CalloutContent from "./CalloutContent";

class Login extends Component {
  _isMounted = false;

  constructor(){
    super();

    this.state = {
      formPressed: false,
      form: null
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
    console.log("UNMOUNTED LOGIN");
    this._isMounted = false;
  }

  handleSubmit(event) {
    if (this._isMounted) {
      this.props.updateLoginStatus(true, event.target.name.value);
    }
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

    const text = "Form isn't a controlled component (want to avoid storing plain text info in state)";

    return(
      <div className="Login-wrapper"  style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1>Login</h1>
        <h3>Enter your dummy credentials below</h3>

        <form 
          ref={this.loginForm} 
          onClick={this.handleClick} 
          onSubmit={this.handleSubmit}
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Name is required" required  />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Password is required" required />
          </label>
          <input type="submit" value="Log me in"/>
        </form>

        <Callout 
          isVisible={this.state.formPressed} 
          parentElement={this.state.form} 
          side="bottom"
        >

          <CalloutContent content={text} closeCallout={this.closeCallout} />
        </Callout>
      </div>
    );
    
  }
}


export default Login;