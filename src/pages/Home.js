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

    state = {
        times: []
    }

    timesCollection = cubeTime => {
        console.log(cubeTime)
        let times = [cubeTime, ...this.state.times]
        
        if (times.length > 5) {
            times = times.slice(0, 5)
        }

        this.setState({
            times: times
        })
    }

    render() {
        return (
            <div>                
                <Container fluid={true} style={{paddingBottom: "4em"}}>
                    <Row className="justify-content-center"> 
                        <Col md='6' style={{marginBottom: '2em'}}><CubeSelector /></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md='7'><Scrambles times={this.state.times} /></Col>
                    </Row>                        
                    <Row className="justify-content-center">
                        <Col md='8'><Timer timesCollection={this.timesCollection}/></Col>
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
