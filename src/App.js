import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RTNavbar from './componenets/RTNavbar';

function App() {

  return (
    <Router>
      <div>
        <RTNavbar />
      </div>
    </Router>
  );
}

export default App;
