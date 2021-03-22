import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%; 
  }
  
  button, input, a {
    text-decoration: none;
    transition: 0.3s;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }

  img {
    pointer-events: none;
  }
  
  *,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  *, button, input {
    outline: 0;
    box-shadow: none;
  }

  html {
    background: var(--color-neutral-100);
  }
  
  :root {
    ${props => {
      const theme = props.theme;

      let append = '';

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}

    font-size: 60%;

    @media (min-width: 700px) {
      font-size: 62.5%;
    }
  }
`;