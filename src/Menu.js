import React, { Component } from "react";
import MyButton from "./MyButton";
import Callout from "react-callout-component";
import CalloutContent from "./CalloutContent";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";


class Menu extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      buttonClick: false,
      container: null,
    };

    this.buttonContainer = React.createRef();
    this.closeCallout = this.closeCallout.bind(this);
    this.updateKeyHelp = this.updateKeyHelp.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.setState({
        container: this.buttonContainer.current
      });
    }
  }

  updateKeyHelp(label) {
    if (this._isMounted) {
      const { updateKey } = this.props;
      this.setState({buttonClick: true});
      updateKey(label);
    }
  }

  componentWillUnmount() {
    console.log("UNMOUNTED MENU");
    this._isMounted = false;
  }

  closeCallout() {
    if (this._isMounted) {
      this.setState({buttonClick : false});
    }
  }

  render() {

    const text = "Demonstration of state & prop usage";

    return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
        
        <div className="headerAndTooltip" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left"}}>
          <div ref={this.buttonContainer} className="menu" style={{width: "200px"}}>
            <MyButton name="Welcome" updateKeyHelp={this.updateKeyHelp}/>
            <MyButton name="About" updateKeyHelp={this.updateKeyHelp}/>
            <MyButton name="Resume" updateKeyHelp={this.updateKeyHelp}/>
          </div>

          <Callout 
            isVisible={this.state.buttonClick} 
            parentElement={this.state.container} 
            side="right"
            style={{backgroundColor: "blue"}}
          >

            <CalloutContent content={text} closeCallout={this.closeCallout} />
          </Callout>
        </div>
      </div>
    ); 
  }
}

export default Menu;