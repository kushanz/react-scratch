import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom"
import "./style.css";

// Layouts
import Header from './pages/Header'

// Pages
import Home from './pages/Home/Home'
import Peoples from './pages/Peoples/Peoples' 

export default function App() {
  return (
    <div>
    <BrowserRouter>
        <Header title="My React" />
        <Switch>
          <Route path="/peoples">
            <Peoples/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}
