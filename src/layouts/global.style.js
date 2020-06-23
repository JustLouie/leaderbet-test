import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    font-family: Firago-Regular;

    &.with-dotted-underline {
      position: relative;
      padding-bottom: 9px;
      &::before {
        content: '';
        width: 100%;
        height: 4px;
        position: absolute;
        border-radius: 4px;
        background-color: #95C7EE;
        bottom: 0px;
        left: 0;
      }

      &::after {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 100%;
        position: absolute;
        bottom: -1px;
        right: -10px;
        background-color: #6FF27B;
      }

      &.orange {
        &::before {
          background-color: #6D728E;
        }

        &::after {
          background-color: #FFD919;
        }
      }

    }
  }

  .app {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #202126 !important;
  }

`
