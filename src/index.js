import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Index from "./containers/Index";
import store from "./store/store";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
