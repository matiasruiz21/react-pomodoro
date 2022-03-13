import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;
  }

  *::before,*::after{
    box-sizing: border-box;
  }
  

  body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)),${({
      theme,
    }) => theme.background};
    color: ${({ theme }) => theme.text.primary};
    min-height: 100vh;
    text-align: center;
    padding-inline: 1rem;
    
  }
`;

export default GlobalStyles;
