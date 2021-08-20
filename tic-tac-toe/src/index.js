import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Game from "./components/game";

import "./index.css";

import { createStore } from "redux";
import reducer from "./reducers/reducer";

// import store from "./app/store";

const store = createStore(reducer);

export default store;

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
