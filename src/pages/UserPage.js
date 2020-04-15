import React from 'react'
import Row from 'react-bootstrap/Row';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
    } from 'reactstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios'

class UserPage extends React.Component {

    state = {
        user: '',
        cubeTimes: []
    }

    //need all cubes that user has stats with *eyes*
    componentDidMount() {
        if ( this.props.location.state.user ) {
            this.fetchUserData(this.props.location.state.user)
            //need to fetch user info on component mount
        }
    }

    fetchUserData = user => {
        axios.get(`http://localhost:3000/users/${user.id}`)
            .then(response => {
                this.setState({
                    user: response.data.user,
                    cubeTimes: response.data.cubeTimes
                })
                this.groupTimesByCube()
            })
    }

    groupTimesByCube = () => {
        let cubeTypes = {}

        this.state.cubeTimes.map(t => {
            return cubeTypes[t.cube_id] 
            ? 
            cubeTypes[t.cube_id].push(t) 
            : 
            cubeTypes[t.cube_id] = [t]
        })

        console.log(cubeTypes)
        return cubeTypes
    
    }

        // return cubeTypes
        //sorts through array of times and creates object by cubetype. will then map over that object and give each array of times by cubetime to oberallstatistics componenet
    



    render() {
        return (
            <div>
                <Row style={{textAlign: 'center', color: '#364182'}}>
                    <Col>
                    <strong>{this.state.user.username} - Lifetime Stats</strong>
                    </Col>
                </Row>
                <Card style={{borderWidth: '.15em', borderColor: '#364182'}}>
                    <CardBody>
                    <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong> - Cube Name - </strong></CardTitle>
                        <div id='lifetime-stats' style={{color: '#364182'}}>
                            <CardSubtitle>Personal Best -</CardSubtitle>
                            <CardSubtitle>Lifetime Solves -</CardSubtitle>
                            <CardSubtitle>Lifetime Avg -</CardSubtitle>
                            <CardSubtitle>Best Session Time -</CardSubtitle>
                            <CardSubtitle>Overall Session Avg -</CardSubtitle>
                            <CardSubtitle>Best Session Avg 5 -</CardSubtitle>
                            <CardSubtitle>Best lifetime Avg 5 -</CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default UserPage
