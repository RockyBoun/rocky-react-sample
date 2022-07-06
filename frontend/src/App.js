import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import history from "./libs/history";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <MainLayout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
