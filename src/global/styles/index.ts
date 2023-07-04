import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  	:root {
		--white: #FFF;
		--black: #000;
    --gray: #222;
    --blue: #0d2636;
    --lightBlue: #0071DB;
    --red: #500000;
    --box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;;
	}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: var(--blue);

    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

    color: var(--gray);
  }

  input, button {
    border: 0;
    outline:0;
  }

  button {
    cursor: pointer;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
