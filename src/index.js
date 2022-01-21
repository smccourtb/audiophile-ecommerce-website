import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import NiceModal from "@ebay/nice-modal-react";
import GlobalState from "./context/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalState>
        <NiceModal.Provider>
          <App />
        </NiceModal.Provider>
      </GlobalState>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
