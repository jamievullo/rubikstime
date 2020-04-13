import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import SignIn from '../pages/SignIn'
import Registration from '../pages/Registration'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import brand from '../assets/rubikstimetrackerlogo3.png'
import axios from 'axios'

class RTNavbar extends React.Component {

    // state = {
    //     isLoggedIn: false,
    //     user: {}
    // }

    componentDidMount() {
        this.loginStatus()
    }

    //taking in login data recieved from server and setting state
    // handleLogin = (data) => {
    //     console.log(data.user.username)
        
    //     if (data.user.username) {
    //         const user = data.user.username
    //         this.dataOrigin(user)
    //     // } else if (data.data.username) {
    //     // const user = data.data.username
    //     // this.dataOrigin(user)
    //     }
    // }

    // //helper function to overcome not setting state 2x in same function and to
    // //also pass into conditional to check if the origin of the data is from the 
    // //server(to check for login from session) or from user input.   
    // dataOrigin = (user) => {
    //     this.setState({
    //         isLoggedIn: true,
    //         user: user
    //     })
    // }

    //on logout clears user state obj and toggles isLoggedIn obj to false
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
    }

    loginStatus = () => {
        //ajax call to sessions custom route
        axios.get('http://localhost:3000/logged_in')
        // This allows our Rails server to set and read the cookie on the front-end’s browser.
        
        .then(response => {
            console.log(response)
        if (response.data.logged_in) {
            this.handleLogin(response)
        } else {
            this.handleLogout()
        }
        })
        .catch(error => console.log('api errors:', error))
        }
    
    handleLogoutClick = () => {
        axios.delete('http://localhost:3000/logout')
        .then(response => {
        this.handleLogout()
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <Container className="p-0" fluid={true} >
                <Navbar className="navbar" expand='md'>
                    <Navbar.Brand>
                    <Link to="/">
                        <img src={brand} style={{height: "50px", width: "300px"}} alt=""/>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                    <span className="mr-auto" style={{color: "#325bfb"}}>Registration</span>
                                        } id="basic-dropdown">
                                        <Registration handleLogin={this.props.handleLogin}/>
                                </NavDropdown>
                                <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                    <span className="mr-auto" style={{color: "#325bfb"}}>Sign In</span>
                                        } id="basic-dropdown">
                                        <SignIn handleLogin={this.props.handleLogin}/>
                                </NavDropdown>                                
                                <Link className="nav-link" style={{color: "#325bfb", margin: 'inherit'}} to='/'>Home</Link>
                                <Link className="nav-link" style={{color: "#325bfb", margin: 'inherit'}} to='/store'>Get the Merch!</Link>
                            </Nav>
                        </Navbar.Collapse>  
                </Navbar>                 
            </Container>           
        )
    }
}

export default RTNavbar