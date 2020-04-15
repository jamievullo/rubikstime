import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RTNavbar from './components/RTNavbar';
import Store from './pages/Store'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import Footer from './components/Footer';

class App extends React.Component {

  state = {
    isLoggedIn: false,
    user: {}
  }

  handleLogin = (data) => {
    console.log(data.user.username)
    
    if (data.user.username) {
        const user = data.user
        this.dataOrigin(user)
    // } else if (data.data.username) {
    // const user = data.data.username
    // this.dataOrigin(user)
    }
  }

//helper function to overcome not setting state 2x in same function and to
//also pass into conditional to check if the origin of the data is from the 
//server(to check for login from session) or from user input.   
  dataOrigin = (user) => {
    this.setState({
        isLoggedIn: true,
        user: user
    })
  }

    handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
  }

  render() {
    return (
      <Router>
        <div>
          <RTNavbar user={this.state.user} handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
        </div>
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              exact path='/'
              render={(props) => <Home {...props} user={this.state.user} />}
            />
            <Route path="/store" component={Store} />
            <Route path="/user-page" component={UserPage} />
          <Footer />
      
      </Router>
    );
  }
}

export default App;
