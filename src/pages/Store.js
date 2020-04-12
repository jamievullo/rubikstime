import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import two from '../assets/2x2Cube.png'
import three from '../assets/3x3Cube.png'
import four from '../assets/4x4Cube.png'
import five from '../assets/5x5Cube.png'
import six from '../assets/6x6Cube.jpg'
import seven from '../assets/7x7Cube.jpg'
import mega from '../assets/Megaminx.jpg'
import pyra from '../assets/Pyraminx.jpg'
import CubeCard from '../components/CubeCard'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

export default class Store extends React.Component {
    //schema for cubeCard in database
    //active storage for image/s
    //image, name, brand, size if applicable, description, price
    state = {
        inputValue: '',
        items: [
            {
                id: 0,
                image: two,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Holds US record",
                price: "$26.99"
            },
            {
                id: 1,
                image: three,
                name: "354m",
                brand: "Gan",
                size: "3 x 3",
                description: "Most popular cube",
                price: "$53.99"
            },
            {
                id: 2,
                image: four,
                name: "V251",
                brand: "Moyou",
                size: "4 x 4",
                description: "Decrease your times",
                price: "$39.99"
            },
            {
                id: 3,
                image: five,
                name: "V251",
                brand: "Moyou",
                size: "5 x 5",
                description: "Buttery turns",
                price: "$43.99"
            },
            {
                id: 4,
                image: six,
                name: "V251",
                brand: "Youshin",
                size: "6 x 6",
                description: "World record holding cube",
                price: "$23.99"
            },
            {
                id: 5,
                image: seven,
                name: "V251",
                brand: "Gan",
                size: "7 x 7",
                description: "Top of the class",
                price: "$33.99"
            },
            {
                id: 6,
                image: mega,
                name: "Megaminx",
                brand: "Youshin",
                size: "mega",
                description: "nice -n- crunchy",
                price: "$23.99"
            },
            {
                id: 7,
                image: pyra,
                name: "Pyraminx",
                brand: "Gan",
                size: "pyra",
                description: "Silky smooth",
                price: "$23.99"
            },
            {
                id: 8,
                image: two,
                name: "Two by Two",
                brand: "Gan",
                size: "2 x 2",
                description: "For smaller hands",
                price: "$23.99"
            },
            {
                id: 9,
                image: three,
                name: "Three by Three",
                brand: "Gan",
                size: "3 x 3",
                description: "For longer fingers",
                price: "$23.99"
            },
            {
                id: 10,
                image: four,
                name: "Four by Four",
                brand: "Gan",
                size: "4 x 4",
                description: "Change your tensions change your life",
                price: "$23.99"
            },
            {
                id: 11,
                image: five,
                name: "Five by Five",
                brand: "Gan",
                size: "5 x 5",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                id: 12,
                image: six,
                name: "V251",
                brand: "Gan",
                size: "6 x 6",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                id: 13,
                image: seven,
                name: "V251",
                brand: "Gan",
                size: "7 x 7",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                id: 14,
                image: mega,
                name: "V251",
                brand: "Gan",
                size: "mega",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
            {
                id: 15,
                image: pyra,
                name: "V251",
                brand: "Gan",
                size: "2 x 2",
                description: "Awesome action, will lower your times!!",
                price: "$23.99"
            },
        ]
    }

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        // const filteredItems = this.state.items.filter(item => {
            //     return item.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
            // })

        const {inputValue} = this.state
            
        let filteredItems = this.state.items.filter((data) =>  {
            return JSON.stringify(data).toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
        })

        let cubeCards = filteredItems.map(item => {
            return (
                <Col md='3' key={item.id}>
                    <CubeCard item={item}/>
                </Col>
            )
        })
        return (
            <div>
                <Row>
                    <Col md={{ size: 'auto', offset: 7 }}>                        
                        <InputGroup style={{marginBottom: '1em'}}>
                            <Input placeholder="Search Items" onChange={this.handleInputChange}/>
                            <InputGroupAddon addonType="append">
                                <Button style={{backgroundColor: '#ffc600', color: '#364182'}}>
                                Search
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Jumbotron style={{height: '200px'}} className="hero bg-transparent jumbotron-fluid p-0">
                    <Container fluid={true}>
                        <Row className="justify-content-center py-0">
                            {/* <Col md={8} sm={12}>
                            <h1 style={{color: "#364182"}} className="display-3 font-weight-bolder">
                                <center>Rubiks Time Store</center>
                            </h1>
                            <h2 style={{color: "#364182"}}><center>Load up on our T-Shirts!!</center></h2>
                            </Col> */}
                        </Row>
                    </Container>
                </Jumbotron>
                    <Row md='5' className="justify-content-center">
                        <Col><center><h3 style={{color: "#364182"}}>The Merch</h3></center></Col>
                    </Row>                                    
                    <Container fluid>
                        <Row>
                            {cubeCards}
                        </Row>
                    </Container>                    
                    <div style={{marginBottom: '10em'}}></div>
            </div>
        )
    }
}
