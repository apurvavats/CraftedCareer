import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
      domain="dev-0ew7yxohg32qmi34.us.auth0.com"
      clientId="J3Ty7mkRAGI5JJtwi3op2hDVQbzLjwlS"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
