import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .container {
    margin-bottom: 5rem;
  }
  .col {
    border: 1px solid black;
  }
  .row {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .footer {
    color: gray;
  }
`;

export default GlobalStyle;
