import React, { Component } from 'react';
import styled from 'styled-components'


const StyledStopwatch = styled.main`
  text-align: center;

  article {
    background-color: ${props => props.theme.secondaryColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-container {
    width: 900px;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    button {
      color: ${props => props.theme.mainColor};
      font-size: calc(10px + 2vmin);
      margin: 0.5em;
      padding: 0.25em 5%;
      background: transparent;
      border: 3px solid ${props => props.theme.mainColor};
      border-radius: 3px;
    }
  }
`

class Stopwatch extends Component {
  state = {
    isRunning: false,
    timeRunning: 0,
    splits: [],
  }

  startButton = () => {
    this.setState(state => {
      if(!!state.isRunning) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.timeRunning
        this.timer = setInterval(() => {
          this.setState({ timeRunning: Date.now() - startTime})
        })
      }
      return { isRunning: !state.isRunning }
    })
  }

  splitButton = () => {
    console.log('Split!')
  }

  resetButton = () => {
    this.setState({ timeRunning: 0, isRunning: false })
  }

  render() {
    const { isRunning, timeRunning } = this.state;
    
    return (
      <StyledStopwatch>
        <article className="App-header">
          <p>{timeRunning}</p>
          <div className="button-container">
            <button type="button" className="start-button" onClick={this.startButton}>
              { isRunning ? 'Stop' : 'Start'}
            </button>
            <button type="button" className="split-button">
              Split
            </button>
            <button type="button" className="reset-button" onClick={this.resetButton}>
              Reset
            </button>
          </div>
        </article>
      </StyledStopwatch>
    );
  }
}

export default Stopwatch;
