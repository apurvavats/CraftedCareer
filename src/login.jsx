import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  
    <Auth0Provider
      domain="dev-0ew7yxohg32qmi34.us.auth0.com"
      clientId="J3Ty7mkRAGI5JJtwi3op2hDVQbzLjwlS"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  
);
