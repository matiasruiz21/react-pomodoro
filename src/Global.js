import { createGlobalStyle, css } from "styled-components";

const theme = css`
  :root {
    --primary: #333;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    text-align: center;
  }
`;

const GlobalStyles = createGlobalStyle(theme);

export default GlobalStyles;
