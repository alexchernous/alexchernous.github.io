import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import mdfile from "../content/Home.md";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
    };
  }

  componentDidMount() {
    fetch(mdfile).then((r) => r.text()).then(text  => {
      this.setState({ file: text });
    });
  }

  render() {
    return (
      <div style={{
        padding: "20px"
        }}>

        <ReactMarkdown source={this.state.file} escapeHtml={false} />
      </div>
    );
  }
}

export default Home;