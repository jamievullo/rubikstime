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

class RTNavbar extends React.Component {
    render() {
        return (
            <Container className="p-0" fluid={true} >
                <Navbar className="navbar" expand='md'>
                    <Navbar.Brand>
                    <img src={brand} style={{height: "50px", width: "300px"}} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                    <span className="mr-auto" style={{color: "#325bfb"}}>Registration</span>
                                        } id="basic-dropdown">
                                        <Registration />
                                </NavDropdown>
                                <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                    <span className="mr-auto" style={{color: "#325bfb"}}>Sign In</span>
                                        } id="basic-dropdown">
                                        <SignIn />
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
