import React, { Component } from "react";
import Button from "./Button";
import Callout from "react-callout-component";
import CalloutContent from "./CalloutContent";


class Menu extends Component {
  _isMounted = false;

  constructor() {
    super();

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
      <div className="headerAndTooltip" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left"}}>
        <div ref={this.buttonContainer} className="menu" style={{width: "200px"}}>
          <Button name="Welcome" updateKeyHelp={this.updateKeyHelp}/>
          <Button name="About" updateKeyHelp={this.updateKeyHelp}/>
          <Button name="Resume" updateKeyHelp={this.updateKeyHelp}/>
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
    ); 
  }
}

export default Menu;