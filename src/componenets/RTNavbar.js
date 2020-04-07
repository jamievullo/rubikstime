import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SignIn from '../pages/SignIn'
import Registration from '../pages/Registration'
import Store from '../pages/Store'
import Container from 'react-bootstrap/Container'

class RTNavbar extends React.Component {
    render() {
        return (
            <Container className="p-0" fluid={true} >
                <Navbar className="navbar" expand='md'>
                    <Registration />
                    <SignIn />
                    <Store />
                </Navbar> 
            </Container>           
        )
    }
}

export default RTNavbar
