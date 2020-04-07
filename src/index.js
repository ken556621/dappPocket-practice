import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";
import AppProvider from "./components/shared/AppProvider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppContainer />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
