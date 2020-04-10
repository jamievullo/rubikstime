import React from 'react'
import Timer from '../components/Timer'
import Scrambles from '../components/Scrambles'
import OverallStatistics from '../components/OverallStatistics'
import RecentTimes from '../components/RecentTimes'
import CubeSelector from '../components/CubeSelector'
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
                        <Col md='4'><RecentTimes /></Col>
                        <Col md='4'><OverallStatistics /></Col>
                    </Row>
                </Container>               
            </div>
        )
    }
}

export default Home
