import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/index.css'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AddPorfolio from "./components/_PRIVATE/AddPorfolio";
import AddTestimonial from "./components/_PRIVATE/AddTestimonial";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={<AddPorfolio/>} />
          <Route path="/admin2" component={<AddTestimonial/>} />
        </Switch>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
