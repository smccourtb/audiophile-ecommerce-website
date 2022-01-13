import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NiceModal from "@ebay/nice-modal-react";
import GlobalState from "./context/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalState>
        <NiceModal.Provider>
          <App />
        </NiceModal.Provider>
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
