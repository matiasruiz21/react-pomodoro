import { createGlobalStyle, css } from "styled-components";

const theme = css`
  :root {
    --primary: #333;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;
  }

  body {
    min-height: 100vh;
    text-align: center;
    padding-inline: 1rem;
  }
`;

const GlobalStyles = createGlobalStyle(theme);

export default GlobalStyles;
