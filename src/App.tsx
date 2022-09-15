import React from "react";
import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
