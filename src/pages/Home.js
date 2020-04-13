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
import axios from 'axios'

class Home extends React.Component {

    state = {
        totalTimes: [],
        last5: [],
        isLoggedIn: false,
        user: {}
    }

    componentDidMount() {
        this.loginStatus()
    }

    //taking in login data recieved from server and setting state
    handleLogin = (data) => {
        console.log(data)
        if (data.user) {
        const user = data.user
        this.dataOrigin(user)
        } else if (data.data.user) {
        const user = data.data.user
        this.dataOrigin(user)
        }
    }

    //helper function to overcome not setting state 2x in same function and to
    //also pass into conditional to check if the origin of the data is from the 
    //server(to check for login from session) or from user input.   
    dataOrigin = (user) => {
        this.setState({
        isLoggedIn: true,
        user: this.props.user
        })
    }

    //on logout clears user state obj and toggles isLoggedIn obj to false
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
    }

    loginStatus = () => {
        //ajax call to sessions custom route
        axios.get('http://localhost:3000/logged_in')
        // This allows our Rails server to set and read the cookie on the front-end’s browser.
        
        .then(response => {
        if (response.data.logged_in) {
            this.handleLogin(response)
        } else {
            this.handleLogout()
        }
        })
        .catch(error => console.log('api errors:', error))
        }
    
    handleLogoutClick = () => {
        axios.delete('http://localhost:3000/logout')
        .then(response => {
        this.handleLogout()
        })
        .catch(error => console.log(error))
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
            <div id="home-container">                
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
