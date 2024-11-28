import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue"]};
  }

  body {
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: anti-aliasing;
    background: ${(props) => props.theme["base-background"]};
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`;
