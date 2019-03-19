import React, { Component } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Stopwatch from './Stopwatch'

const theme = {
  mainColor: '#61dafb',
  secondaryColor: '#282c34',
}

const GlobalStyleProvider = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyleProvider />
        <ThemeProvider theme={theme}>
          <Stopwatch />
        </ThemeProvider>
      </>
    )
  }
}

export default App