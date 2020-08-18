import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home'
import Subscriptions from './views/Subscriptions'

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/subscriptions" component={Subscriptions} />
    </Router>
  );
}
