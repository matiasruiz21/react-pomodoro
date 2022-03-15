import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    overflow-x: hidden;
  }

  *::before,*::after{
    box-sizing: border-box;
  }
  

  body {
    display: flex;
    justify-content: center;
    text-align:center;

    min-height: 100vh;
    padding-inline: 1rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)),${({
      theme,
    }) => theme.background};
    color: ${({ theme }) => theme.text.primary};
    
    /* Font Styles*/
    font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
    font-style: normal;
    font-weight: 400;

    /* identical to box height, or 150% */
    letter-spacing: 0.5px;
  }

  h1{
    /* Headline 1 */
    margin: 0.30em 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: clamp(3rem, 5vw + 1.5rem, 5rem);
    
    /* identical to box height, or 117% */
    letter-spacing: -1.5px;
  }

  h2{
    /* Headline 2 */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 60px;

    /* identical to box height, or 120% */
    letter-spacing: -0.5px;
  }

  h3{
    /* Headline 3 */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    /* identical to box height, or 117% */
  }

  h4{
    /* Headline 4 */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;

    /* identical to box height, or 106% */
  }

  svg {
    display: flex;
  }
`;

export default GlobalStyles;
