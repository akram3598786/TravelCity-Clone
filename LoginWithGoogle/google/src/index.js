import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
// domain name  - dev-wzfofdn8.us.auth0.com
//              - xiMsVylFTzvnjQM6DnpPCkqnnWpQ2PFl

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-wzfofdn8.us.auth0.com"
    clientId="xiMsVylFTzvnjQM6DnpPCkqnnWpQ2PFl"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
