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

export default function Store(props) {
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
                    <Col><center><h3 style={{color: "#364182"}}>Cubes For Sale</h3></center></Col>
                </Row>
                <Row md='4' style={{marginBottom: '3em'}}>
                    <Col><img id='1' src={two} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='2' src={three} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='3' src={four} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='4' src={five} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    
                </Row>
                <Row md='4' style={{marginBottom: '3em'}}>
                    <Col><img id='5' src={six} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='6' src={seven} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='7' src={mega} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='8' src={pyra} style={{height: "70px", width: "80px"}} alt=""/></Col>
                </Row>
                <Row md='4' style={{marginBottom: '3em'}}>
                    <Col><img id='1' src={two} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='2' src={three} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='3' src={four} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='4' src={five} style={{height: "70px", width: "80px"}} alt=""/></Col>                    
                </Row>
                <Row md='5' className="justify-content-center">
                    <Col><center><h3 style={{color: "#364182"}}>The Merch</h3></center></Col>
                </Row>
                <Row md='4' style={{marginBottom: '3em'}}>
                    <Col><img id='5' src={six} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='6' src={seven} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='7' src={mega} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='8' src={pyra} style={{height: "70px", width: "80px"}} alt=""/></Col>
                </Row>
                <Row md='4' style={{marginBottom: '3em'}}>
                    <Col><img id='1' src={two} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='2' src={three} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='3' src={four} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='4' src={five} style={{height: "70px", width: "80px"}} alt=""/></Col>                    
                </Row>
                <Row md='4' style={{marginBottom: '3em'}}>
                    <Col><img id='5' src={six} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='6' src={seven} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='7' src={mega} style={{height: "70px", width: "80px"}} alt=""/></Col>
                    <Col><img id='8' src={pyra} style={{height: "70px", width: "80px"}} alt=""/></Col>
                </Row>
                <div style={{marginBottom: '10em'}}></div>
        </div>
    )
}
