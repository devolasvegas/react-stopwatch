import React, { Component } from 'react';
import styled from 'styled-components'

import logo from './logo.svg';
import './App.css';

const StyledStopwatch = styled.article`
  background: #000000;
`

class Stopwatch extends Component {
  render() {
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
      </div>
    );
  }
}

export default Stopwatch;
