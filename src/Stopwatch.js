import React, { Component } from 'react';
import styled from 'styled-components'

import logo from './logo.svg';
import './App.css';

const StyledStopwatch = styled.main`
  text-align: center;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  .button-container {
    width: 900px;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    button {
      color: #61dafb;
      font-size: 1.25rem;
      margin: 0.5em;
      padding: 0.25em 5%;
      background: transparent;
      border: 3px solid #61dafb;
      border-radius: 3px;
    }
  }


  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

class Stopwatch extends Component {
  render() {
    return (
      <StyledStopwatch>
        <article className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="button-container">
            <button className="start-button">
              Start
            </button>
            <button className="split-button">
              Split
            </button>
            <button className="reset-button">
              Reset
            </button>
          </div>
        </article>
      </StyledStopwatch>
    );
  }
}

export default Stopwatch;
