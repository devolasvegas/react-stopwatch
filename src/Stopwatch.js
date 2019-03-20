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

    .timer {
      color: ${props => props.theme.mainColor};
      font-size: calc(20px + 5vmin);
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
        transition: 300ms;
        &.inactive {
            opacity: 0.5;
        }
      }
    }
  }
`

class Stopwatch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isRunning: false,
      timeRunning: 0,
      splits: [],
    }
  }

  startButton = () => {
    this.setState(state => {
      if(!!state.isRunning) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.timeRunning
        this.timer = setInterval(() => {
          this.setState({ timeRunning: Date.now() - startTime })
        })
      }
      return { isRunning: !state.isRunning }
    })
  }

  splitButton = () => {
    const splits = this.state.splits
    if(splits.length >= 1) {
      const lastSplit = splits[splits.length - 1]
      const newSplit = this.state.timeRunning - lastSplit
      splits.push(newSplit)
    } else {
      splits.push(this.state.timeRunning)
    }
    this.setState({ splits })
  }

  resetButton = () => {
    this.setState({
      timeRunning: 0,
      isRunning: false,
      splits: [],
    })
  }

  formatTime = (milliseconds) => {
    return new Date(milliseconds).toISOString().slice(11, -1)
  }

  render() {
    const { isRunning, timeRunning, splits } = this.state;
    
    return (
      <StyledStopwatch>
        <article className="App-header">
          <p className="timer">{this.formatTime(timeRunning)}</p>
          <ul>
            {splits.map(split => (
              <li>{this.formatTime(split)}</li>
            ))}
          </ul>
          <div className="button-container">
            <button type="button" className="start-button" onClick={this.startButton}>
              { isRunning ? 'Stop' : 'Start'}
            </button>
            <button type="button" className={`split-button${isRunning ? '' : ' inactive'}`} onClick={this.splitButton}>
              Split
            </button>
            <button type="button" className={`reset-button${isRunning ? ' inactive' : ''}`} onClick={isRunning ? null : this.resetButton}>
              Reset
            </button>
          </div>
        </article>
      </StyledStopwatch>
    );
  }
}

export default Stopwatch;
