import React, { Component } from 'react';
import styled from 'styled-components'

import logo from './logo.svg';

const StyledStopwatch = styled.main`
  text-align: center;

  article {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
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
`

class Stopwatch extends Component {
  render() {
    return (
      <StyledStopwatch>
        <article className="App-header">
          <div className="button-container">
            <button type="button" className="start-button">
              Start
            </button>
            <button type="button" className="split-button">
              Split
            </button>
            <button type="button" className="reset-button">
              Reset
            </button>
          </div>
        </article>
      </StyledStopwatch>
    );
  }
}

export default Stopwatch;
