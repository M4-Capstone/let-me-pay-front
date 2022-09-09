import { createGlobalStyle } from "styled-components";

export const GlobalStlye = createGlobalStyle`

  //Reset CSS global
  * {
      padding: 0;
      border: 0;
      margin: 0;
      box-sizing: border-box;
      outline: none;
      list-style: none;
      font-family: 'Inter', sans-serif;
  }

  :root {
    --primary-color: 201, 255, 200; // #C9FFC8
    --secondary-color: 148, 186, 147; // #94BA93
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #C9FFC9
  }

  #root { 
      width: 100%;
      height: 100%;
  }

`;

export default GlobalStlye;
