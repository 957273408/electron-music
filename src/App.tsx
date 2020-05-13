import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter } from "react-router-dom";
import getRouter from "./router";
import 'ionicons201/css/ionicons.css';

function App(props: any) {
  return (
    <Provider store={store}>
      <HashRouter>{getRouter()}</HashRouter>
    </Provider>
  );
}

export default App;
