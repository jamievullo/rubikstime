import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import SignIn from '../pages/SignIn'
import Registration from '../pages/Registration'
import Store from '../pages/Store'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { NavDropdown, Form } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'


class RTNavbar extends React.Component {
    render() {
        return (
            <Container className="p-0" fluid={true} >
                <Navbar className="navbar" expand='md'>
                    <Navbar.Brand>
                        Rubiks Time Tracker
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                    <span className="mr-auto" style={{color: "black"}}>Registration</span>
                                        } id="basic-dropdown">
                                        <Registration />
                                </NavDropdown>
                                <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                    <span className="mr-auto" style={{color: "black"}}>Sign In</span>
                                        } id="basic-dropdown">
                                        <SignIn />
                                </NavDropdown>
                                
                                <Link className="nav-link" style={{color: "black", margin: 'inherit'}} to='/'>Home</Link>
                                <Link className="nav-link" style={{color: "black", margin: 'inherit'}} to='/store'>Store</Link>
                            </Nav>
                        </Navbar.Collapse>  
                </Navbar> 
            </Container>           
        )
    }
}

export default RTNavbar
