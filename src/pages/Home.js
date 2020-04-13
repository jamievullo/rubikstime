import React from 'react'
import CubeSelector from '../components/CubeSelector'
import Scrambles from '../components/Scrambles'
import Timer from '../components/Timer'
import RecentTimes from '../components/RecentTimes'
import OverallStatistics from '../components/OverallStatistics'
import UpcomingWCAEvents from '../components/UpcomingWCAEvents'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Home extends React.Component {

    state = {
        totalTimes: [],
        last5: []
    }

    timesCollection = cubeTime => {
        console.log(cubeTime)
        let times = [cubeTime, ...this.state.totalTimes]
        let last5 = [cubeTime, ...this.state.last5]
        if (last5.length > 5) {
            last5 = [...last5.slice(0, 5)]
        }

        this.setState({
            totalTimes: times,
            last5: last5
        })
    }

    render() {
        return (
            <div>                
                <Container fluid={true} style={{paddingBottom: "4em"}}>
                    <Row className="justify-content-center"> 
                        <CubeSelector />
                    </Row>
                    <Row className="justify-content-center" style={{paddingBottom: "1.5em"}}>
                        <Col md='7'><Scrambles times={this.state.times} /></Col>
                    </Row>                        
                    <Row className="justify-content-center" style={{paddingBottom: "1.5em"}}>
                        <Col md='8'><Timer timesCollection={this.timesCollection}/></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md='3'><RecentTimes last5={this.state.last5}/></Col>
                        <Col md='3'><OverallStatistics /></Col>
                        <Col md='6'><UpcomingWCAEvents /></Col>
                    </Row>
                </Container> 
                <div style={{height: '3em'}}></div>              
            </div>
        )
    }
}

export default Home
