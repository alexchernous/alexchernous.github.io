import React, { Component } from "react";
import Callout from "react-callout-component";
import CalloutContent from "./CalloutContent";

class TextBox extends Component {
  _isMounted = false;

  constructor() {
    super();

    this.state = {
      value : 'An area to write some text...',
      textAreaFirstClick: false,
      isCalloutEligible: false,
      input: null,
    };

    this.textArea = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeCallout = this.closeCallout.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.setState({
        input: this.textArea.current
      });
    }
  }

  handleClick() {
    if (this._isMounted && !this.state.textAreaFirstClick) {
      this.setState({textAreaFirstClick : true, value : ''});
    }
  }

  // [name]: value is used to control multiple inputs...
  handleChange(event) {
    const value = event.target.value;
    //const name = event.target.name;

    this.setState({value: value});
  }

  handleSubmit(event) {
    this.setState({isCalloutEligible: true});

    //prevents relaoding page
    event.preventDefault();
  }

  closeCallout() {
    if (this._isMounted) {
      this.setState({isCalloutEligible : false});
    }
  }

  render () {
    const text =  "This text area is a controlled component, often used in forms to decide the next form action based on some intermediate user input. E.g. populating a certain set of fields on user choice of a select dropdown.\n You typed: \"" + this.state.value + "\"";

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Textbox:
          <textarea ref={this.textArea} name="text" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick} />
          <input type="submit" value="Submit text" />
        </label>
        
        <Callout 
          isVisible={this.state.isCalloutEligible} 
          parentElement={this.state.input} 
          side="bottom"
        >

          <CalloutContent content={text} closeCallout={this.closeCallout} />
        </Callout>
      </form>
    );
  }
}

export default TextBox;