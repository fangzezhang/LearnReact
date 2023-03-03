import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './router';
import store from "@/store";
import { Provider } from 'react-redux';

const baseURL = process.env.REACT_APP_BASEURL;

if (!window.location.pathname.includes(baseURL)) {
  window.history.replaceState('', '', window.location.pathname + baseURL);
  window.location.reload();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/*<App />*/}
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
