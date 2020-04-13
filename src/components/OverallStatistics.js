import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
    } from 'reactstrap';

class OverallStatistics extends React.Component {
    //when logged in a users best times and overall averages will be called from 
    //the database to populate this component for rendering.
    fetchTimesFromDatabase() {

    }

    render() {
        return (
            <div>
                <Card style={{borderWidth: '.15em', borderColor: '#364182'}}>
                    <CardBody>
                    <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong>Lifetime Stats-{this.props.currentCube}</strong></CardTitle>
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

export default OverallStatistics