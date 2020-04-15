import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
    } from 'reactstrap';

class OverallStatistics extends React.Component {

    cubes = {
        1: '2 x 2',
        2: '3 x 3',
        3: '4 x 4',
        4: '5 x 5',
        5: '6 x 6',
        6: '7 x 7',
        7: 'megaminx',
        8: 'pyraminx',
        9: 'square-1',
        10: 'skewb',
        11: '3 x 3 OH',
        12: '3 x 3 BF'
    }

    personalBest = times => {
        let newTimes = times.sort((a, b) => a.cube_time - b.cube_time)
        return newTimes[0].cube_time   
    }

    lifetimeAvg = times => {
        let timesTotal = 0
        
        times.map(t => {
            return timesTotal += t.cube_time
            // console.log(t)
        })
                
        return (timesTotal/times.length).toFixed(2)
    }

    bestLifetimeAvg5 = times => {

    }

    render() {
        const cubeName = this.cubes[this.props.cubeId]
        const times = this.props.times
        this.lifetimeAvg(times)
        if ( cubeName && times ) {
            return (
                <div>
                    <Card style={{borderWidth: '.15em', borderColor: '#364182'}}>
                        <CardBody>
                        <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong>{cubeName}</strong></CardTitle>
                            <div id='lifetime-stats' style={{color: '#364182'}}>
                                <CardSubtitle>Personal Best - {this.personalBest(times)}</CardSubtitle>
                                <CardSubtitle>Lifetime Solves - {times.length}</CardSubtitle>
                                <CardSubtitle>Lifetime Avg - {this.lifetimeAvg(times)}</CardSubtitle>
                                {/* <CardSubtitle>Best Session Time -</CardSubtitle> */}
                                {/* <CardSubtitle>Overall Session Avg -</CardSubtitle> */}
                                {/* <CardSubtitle>Best Session Avg 5 -</CardSubtitle> */}
                                <CardSubtitle>Best lifetime Avg 5 -</CardSubtitle>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            )
        }
    }
}

export default OverallStatistics