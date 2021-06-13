import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { icons } from "./assets/icons";
// import reducers from "./reducers";

// import { Provider } from "react-redux";
// // import store from "./store";

// React.icons = icons;
// const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
React.icons = icons;

const store = createStore(reducers, compose(applyMiddleware(thunk)));
//const store = compose(applyMiddleware(thunk))(createStore)(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
