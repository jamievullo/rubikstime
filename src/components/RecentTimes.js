import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
    } from 'reactstrap';

class RecentTimes extends React.Component {

    state = {
        time1: '16.36',
        time2: '14.25',
        time3: '22.14',
        time4: '17.93',
        time5: '18.58',
        averageTime: ''
    }

    averageTime() {

    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle style={{textAlign: 'center'}}>Recent Times</CardTitle>
                        <div id='recent-times'>
                        <CardSubtitle>Time 1 =   {this.state.time1}</CardSubtitle>
                        <CardSubtitle>Time 2 =   {this.state.time2}</CardSubtitle>
                        <CardSubtitle>Time 3 =   {this.state.time3}</CardSubtitle>
                        <CardSubtitle>Time 4 =   {this.state.time4}</CardSubtitle>
                        <CardSubtitle>Time 5 =   {this.state.time5}</CardSubtitle>
                        <br />
                        <CardSubtitle>Best: </CardSubtitle>
                        <CardSubtitle>Worst: </CardSubtitle>
                        <CardSubtitle>Average: </CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default RecentTimes

