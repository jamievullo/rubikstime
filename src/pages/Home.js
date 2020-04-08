import React from 'react'
import Timer from '../componenets/Timer'
import Scrambles from '../componenets/Scrambles'
import OverallStatistics from '../componenets/OverallStatistics'
import RecentTimes from '../componenets/RecentTimes'
import CubeSelector from '../componenets/CubeSelector'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <div>                
                <Container fluid={true} style={{paddingBottom: "4em"}}>
                    <Row className="justify-content-center"> 
                        <Col md='6' style={{marginBottom: '2em'}}><CubeSelector /></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md='5'><Scrambles /></Col>
                    </Row>                        
                    <Row className="justify-content-center">
                        <Col md='8'><Timer/></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md='2'><RecentTimes /></Col>
                        <Col md='2'><OverallStatistics /></Col>
                    </Row>
                </Container>               
            </div>
        )
    }
}

export default Home
