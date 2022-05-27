import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/components/pages/index";
import datadog from "./datadog";

const rootDOM = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);
datadog;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
