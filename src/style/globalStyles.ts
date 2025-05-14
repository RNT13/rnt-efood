import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }

    body {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      background-color: ${theme.colors.secondaryColor};
      overflow-x: hidden;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
  `

export const AppLayout = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  height: 100vh;
`
