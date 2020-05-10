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
import Modal1 from '../components/Modal1'

class RTNavbar extends React.Component {

    // state = {
    //     isLoggedIn: false,
    //     user: {}
    // }

    componentDidMount() {
        this.loginStatus()
    }

    loginStatus = () => {
        //ajax call to sessions custom route
        axios.get('http://localhost:3000/logged_in')
        // This allows our Rails server to set and read the cookie on the front-end’s browser.
        
        .then(response => {
            // console.log(response)
        if (response.data.logged_in) {
            this.props.handleLogin(response)
        } else {
            this.props.handleLogout()
        }
        })
        .catch(error => console.log('api errors:', error))
        }
    
    handleLogoutClick = () => {
        axios.delete('http://localhost:3000/logout')
        .then(response => {
        this.props.handleLogout()
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
                                {this.props.isLoggedIn ?
                                <>
                                <Link className="nav-link" style={{color: "#325bfb", margin: 'inherit'}} 
                                    to={{
                                        pathname: '/user-page',
                                            state: {
                                                user: this.props.user
                                            }
                                    }}>Your Page</Link>
                                <Link className="nav-link" style={{color: "#325bfb", margin: 'inherit'}} onClick={this.handleLogoutClick} to='/'>Logout</Link>
                                </>
                                : 
                                <>
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
                                </> 
                                }
                                {/* <Link className="nav-link" style={{color: "#325bfb", margin: 'inherit'}} to='/'>Home</Link> */}
                                <Link className="nav-link" style={{color: "#325bfb", margin: 'inherit'}} to='/store'>Get the Merch!</Link>
                                <Link className="nav-link" style={{color: "#325bfb", margin: 'inherit'}} to='/'><Modal1 /></Link>
                            </Nav>
                        </Navbar.Collapse>  
                </Navbar>                 
            </Container>           
        )
    }
}

export default RTNavbar