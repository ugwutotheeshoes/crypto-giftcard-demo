import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout"
import { Success } from './Success';
import { Error } from "./Error";
import { App } from "./App";
import "@stripe/stripe-js"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
