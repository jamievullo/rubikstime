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
                <Card>
                    <CardBody>
                        <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong>Lifetime Stats (cube)</strong></CardTitle>
                        <div id='lifetime-stats' style={{color: '#364182'}}>
                            <CardSubtitle>Personal Best (cube) -</CardSubtitle>
                            <CardSubtitle>Lifetime Solves (cube) -</CardSubtitle>
                            <CardSubtitle>Lifetime Average (cube) -</CardSubtitle>
                            <CardSubtitle>Best Session Time -</CardSubtitle>
                            <CardSubtitle>Overall Session Average (cube) -</CardSubtitle>
                            <CardSubtitle>Best Session Average of 5 (cube) -</CardSubtitle>
                            <CardSubtitle>Best lifetime Average of 5 (cube) -</CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default OverallStatistics