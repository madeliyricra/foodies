import React from "react";
import ReactDOM from "react-dom";
import "./assets/sass/index.scss";

import Routes from "./routes/Routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
