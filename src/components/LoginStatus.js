import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

class LoginStatus extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return(
      <div style={{
        padding: "0px 16px 0px 0px",
        background: "rgb(52, 58, 64)",
        display: "flex",
        alignItems: "center",
        flexDirection: "row-reverse",
        width: "100%"
        }}>

        {this.props.isLoggedIn &&
          <LinkContainer to="/">
            <Button
              variant="danger"
              onClick={this.handleLogout}>
                Logout
            </Button>
          </LinkContainer>
        }
        {!this.props.isLoggedIn &&
          <LinkContainer to="/login">
            <Button variant="warning">Login</Button>
          </LinkContainer>
        }

        <p style={{
          color: "white",
          padding: "8px",
          margin: "0px"
          }}>

          Hi, {this.props.userName}!
        </p>
      </div>
    );
  }
}

export default LoginStatus;