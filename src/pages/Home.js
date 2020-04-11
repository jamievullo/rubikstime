import React from 'react'
import Timer from '../components/Timer'
import Scrambles from '../components/Scrambles'
import OverallStatistics from '../components/OverallStatistics'
import RecentTimes from '../components/RecentTimes'
import CubeSelector from '../components/CubeSelector'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import UpcomingWCAEvents from '../components/UpcomingWCAEvents'

class Home extends React.Component {
    render() {
        return (
            <div>                
                <Container fluid={true} style={{paddingBottom: "4em"}}>
                    <Row className="justify-content-center"> 
                        <Col md='6' style={{marginBottom: '2em'}}><CubeSelector /></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md='7'><Scrambles /></Col>
                    </Row>                        
                    <Row className="justify-content-center">
                        <Col md='8'><Timer/></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md='4'><RecentTimes /></Col>
                        <Col md='4'><OverallStatistics /></Col>
                        <Col md='4'><UpcomingWCAEvents /></Col>
                    </Row>
                </Container> 
                <div style={{height: '3em'}}></div>              
            </div>
        )
    }
}

export default Home
