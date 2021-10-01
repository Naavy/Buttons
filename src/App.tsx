import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { ButtonsContextProvider } from "./context/ButtonsContext";

function App() {
  return (
    <div className="App">
      <ButtonsContextProvider>
        <Main />
      </ButtonsContextProvider>
    </div>
  );
}

export default App;
