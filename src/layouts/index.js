import React from 'React'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Global.style'
import { Container } from './Layout.style'
import Header from 'src/components/Header'
import primaryTheme from './themes/primaryTheme'

export default (props) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      <div className="app">
        <Container>
          <Header />
          <div className="app-main-container">
            { props.children }
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}
