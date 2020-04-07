import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import SignIn from '../pages/SignIn'
import Registration from '../pages/Registration'
import Store from '../pages/Store'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'


class RTNavbar extends React.Component {
    render() {
        return (
            <Container className="p-0" fluid={true} >
                <Navbar className="navbar" expand='md'>
                    <Navbar.Brand>

                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <NavDropdown className="account" style={{margin: 'inherit'}} title={
                                    <span className="mr-auto" style={{color: "white"}}>Account</span>
                                        } id="basic-dropdown">
                                    
                                    <NavDropdown.Item as={Link} to='/' onClick={this.handleLogoutClick}>
                                        Log Out
                                    </NavDropdown.Item>
                                    
                                    <NavDropdown.Item as={Link} to='/login'>
                                        Log In
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/signup'>
                                        Create Account
                                    </NavDropdown.Item>
                                    
                                    
                                </NavDropdown>
                                <Link className="nav-link" style={{color: "white", margin: 'inherit'}} to='/'>Home</Link>
                           </Nav>
                        </Navbar.Collapse>
                    <Registration />
                    <SignIn />
                    <Store />
                </Navbar> 
            </Container>           
        )
    }
}

export default RTNavbar