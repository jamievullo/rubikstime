import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RTNavbar from './componenets/RTNavbar';
import Store from './pages/Store'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <div>
        <RTNavbar />
      </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Store} />
    </Router>
  );
}

export default App;
