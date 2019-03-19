import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Stopwatch from './Stopwatch'

const theme = {
  mainColor: '#61dafb',
  secondaryColor: '#282c34',
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Stopwatch />
      </ThemeProvider>
    )
  }
}

export default App