import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import two from '../assets/2x2Cube.jpg'
import three from '../assets/3x3Cube.png'
import four from '../assets/4x4Cube.png'
import five from '../assets/5x5Cube.png'
import six from '../assets/6x6Cube.jpg'
import seven from '../assets/7x7Cube.jpg'
import mega from '../assets/Megaminx.jpg'
import pyra from '../assets/Pyraminx.jpg'
import CubeCard from '../components/CubeCard'

export default class Store extends React.Component {

    state = {
        cubes: [
            {
                image: two,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: three,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: four,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: five,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: six,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: seven,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: mega,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: pyra,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: two,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: three,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: four,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: five,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: six,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: seven,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: mega,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                image: pyra,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
        ]
    }

    render() {
        let cubeCards = this.state.cubes.map(cube => {
            return (
                <Col sm='2'>
                    <CubeCard cube={cube}/>
                </Col>
            )
        })
        return (
            <div>
                <Jumbotron className="hero bg-transparent jumbotron-fluid p-0">
                    <Container fluid={true}>
                        <Row className="justify-content-center py-0">
                            <Col md={8} sm={12}>
                            <h1 style={{color: "#364182"}} className="display-3 font-weight-bolder">
                                <center>Rubiks Time Store</center>
                            </h1>
                            <h2 style={{color: "#364182"}}><center>Load up on our T-Shirts!!</center></h2>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                    <Row md='5' className="justify-content-center">
                        <Col><center><h3 style={{color: "#364182"}}>The Cubes</h3></center></Col>
                    </Row>
                    <Container fluid>
                        <Row>
                            {cubeCards}
                        </Row>
                    </Container>
                    <Row md='5' className="justify-content-center">
                        <Col><center><h3 style={{color: "#364182", marginTop: "2em"}}>The Merch</h3></center></Col>
                    </Row>
                    
                    <div style={{marginBottom: '10em'}}></div>
            </div>
        )
    }
}
