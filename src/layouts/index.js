import React from 'React'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Global.style'
import primaryTheme from './themes/primaryTheme'

export default (props) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      <div className="app">
        <div className="app-main-container">
          { props.children }
        </div>
      </div>
    </ThemeProvider>
  )
}
