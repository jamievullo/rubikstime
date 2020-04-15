import React from 'react'
import CubeSelector from '../components/CubeSelector'
import Scrambles from '../components/Scrambles'
import Timer from '../components/Timer'
import RecentTimes from '../components/RecentTimes'
// import OverallStatistics from '../components/OverallStatistics'
import UpcomingWCAEvents from '../components/UpcomingWCAEvents'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios'

class Home extends React.Component {
    //gets user object from App through props

    state = {
        totalTimes: [],
        last5: [],
        currentCube: '3 x 3'
    }

    handleCubeSelection = cube => {
        console.log(cube)
        //post fetch to current cube for user records by cube
        //set state for last5 and totalTimes
        if ( this.props.user ) {
            const user = this.props.user

            axios.get(`http://localhost:3000/users/${user.id}/cubes/${cube}`)
                .then(response => {
                    this.setState({
                        totalTimes: response.data.all_times_by_cube,
                        last5: response.data.last_5,
                        currentCube: cube
                    })
                })
        } else {

            this.setState({
                currentCube: cube
            })
        }
    }

    pushTime = cubetime => {
        const user = this.props.user
        const record = cubetime
        axios.post(`http://localhost:3000/users/${user.id}/cubes/${this.state.currentCube}/add_record`, {record})
            .then(response => {
                console.log('time successfully pushed')
                // this.setState({
                //     totalTimes: response.data.all_times_by_cube,
                //     last5: response.data.last_5
                // })
            })
    }

    timesCollection = cubeTime => {
        // console.log(cubeTime)
        // console.log(this.props.user)
        if ( Object.keys(this.props.user).length > 0 ) {
            this.pushTime(cubeTime)
        }

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
            <div id="home-container">               
                <Container fluid={true} style={{paddingBottom: "4em"}}>
                    <Row className="justify-content-center"> 
                        <CubeSelector handleCubeSelection={this.handleCubeSelection}/>
                    </Row>
                    <Row className="justify-content-center" style={{paddingBottom: "1.5em"}}>
                        <Col md='8'><Scrambles times={this.state.times} /></Col>
                    </Row>                        
                    <Row className="justify-content-center" style={{paddingBottom: "1.5em"}}>
                        <Col md='8'><Timer timesCollection={this.timesCollection}/></Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md='3'><RecentTimes currentCube={this.state.currentCube} last5={this.state.last5}/></Col>
                        {/* <Col md='3'><OverallStatistics currentCube={this.state.currentCube}/></Col> */}
                        <Col md='6'><UpcomingWCAEvents /></Col>
                    </Row>
                </Container> 
                <div style={{height: '3em'}}></div>              
            </div>
        )
    }
}

export default Home
