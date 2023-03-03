import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import App from "./App";

function Render() {
  return (
    <div class="container">
      <App />
    </div>
  );
}

ReactDOM.render(<Render />, document.querySelector("#root"));
