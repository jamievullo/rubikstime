import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RTNavbar from './components/RTNavbar';
import Store from './pages/Store'
import Home from './pages/Home'
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div>
        <RTNavbar />
      </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
        <Footer />
    </Router>
  );
}

export default App;
