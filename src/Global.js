import { createGlobalStyle, css } from "styled-components";

const theme = css`
  :root {
    --primary: #333;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    min-height: 100vh;
    text-align: center;
  }
`;

const GlobalStyles = createGlobalStyle(theme);

export default GlobalStyles;
