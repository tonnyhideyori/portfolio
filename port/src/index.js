import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/index.css";
import "./css/w3.css";
import resumeData from "./resumeData.json";
import Info from "./components/Info";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/info" component={Info} />
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(<Root data={resumeData} />, document.getElementById("root"));
registerServiceWorker();
