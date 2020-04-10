import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
    } from 'reactstrap';

class OverallStatistics extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle style={{textAlign: 'center'}}>Lifetime Stats</CardTitle>
                        <div id='lifetime-stats'>
                            <CardSubtitle>Personal Best (cube) -</CardSubtitle>
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

