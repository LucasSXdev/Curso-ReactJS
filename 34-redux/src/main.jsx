import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom"; // Certifique-se de que está usando a importação correta do react-dom
import App from "./App.jsx";
import store from "./redux/store";

const rootElement = document.getElementById("root");

const root = render.createRoot(rootElement); // Corrigindo a importação

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
