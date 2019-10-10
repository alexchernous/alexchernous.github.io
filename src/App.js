import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonArray from './ButtonArray';
import ContentContainer from './ContentContainer';

class App extends Component {
  constructor(){
    super();

    this.state = {
      key: 'Welcome',
      content: {
        'Welcome': 'Welcome to my page.',
        'About': 'About me',
        'Resume': 'Comp Sci',
      }
    };

    this.updateKey = this.updateKey.bind(this);
  }

  updateKey(newKey) {
    this.setState({
      key: newKey,
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ButtonArray updateKey={this.updateKey} />
        <ContentContainer list={this.state.content} index={this.state.key} />
      </div>
    );
  }
}

export default App;
