import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button
    } from 'reactstrap';

class RecentTimes extends React.Component {

    state = {
        time1: '16.36',
        time2: '14.25',
        time3: '22.14',
        time4: '17.93',
        time5: '18.58',
        averageTimeArray: [], //push cube times here
        averageTime: '',      //for rendering of average time
        middleTimeArray: [],  //gets times after 3 times exist in averageTimeArray
        midThreeAverage: '',  //for rendering of average of 3 middle times
        bestTime: '',         //for rendering best time
        worstTime: ''
    }

    worstCubeTime(arr) {
        arr.sort((a, b) => a - b)
        let worstOfFive = arr.pop()
        return worstOfFive
    }
    //takes in average time array, sorts it, and returns first index
    //needs to setState of 'bestTime'
    bestCubeTime(arr) {
        arr.sort((a, b) => a - b)
        let bestOfFive = arr.shift()
        return bestOfFive
    }

    //takes in averageTimeArray, adds up all times, divides by array length, returns average
    //needs to setState of 'averageTime'
    //need to call this function somewhere
    averageCubeTime(arr) {
        // let arr = [this.state.time1, this.state.time2, this.state.time3, this.state.time4, this.state.time5];
        let sum = arr.reduce((previous, current) => current += previous);
        let avg = sum / arr.length;
        this.setState({
            averageTime: avg
        })
        return avg
    }

    //takes in averageTimeArray, sorts it, removes first and last index, returns new array
    //need to call this function somewhere
    //needs to detState of 'midThreeAverage'
    //need to set conditional to not run until arr has 3 times in it
    averageMiddleThreeTimes(arr) {
        // let arr = [this.state.time1, this.state.time2, this.state.time3, this.state.time4, this.state.time5];
        arr.sort((a,b) => a - b)    
        let newArray = arr.slice(1, -1)
        // arr.shift()
        // arr.pop()
        return newArray
        //need to call averageCubeTime function to get average of three remaining times
    }

    //need to display clickable button to add 2 seconds to last recorded time only
    //needs onClick attribute to add 2 seconds to time if necessary 
    //needs to setState of time1 
    //also needs a disable after click
    plusTwo() {
        this.setState({
            time1: this.state.time1 + 2
        })
        return null
    }
    //needs onClick to add DNF time to AverageTimeArray
    //still needs to be counted. If more than 3 DNF's, no average of three can be recorded
    //maybe a count of DNF's and a default value for it to be averaged in to averageTime?
    didNotFinish() {

    }

    //when logged in a users best times and overall averages will be called from 
    //the database to pop 
    pushTimesToDatabase() {

    }

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong>Recent Times</strong></CardTitle>
                        <div id='recent-times' style={{color: '#364182'}}>
                        <CardSubtitle>
                            Time 1 = {this.state.time1}   
                            <Button style={{padding: '0px', marginLeft: '.424em', backgroundColor: '#ffc600', color: '#364182'}}>plus 2</Button>
                            <Button style={{padding: '0px', marginLeft: '.424em', backgroundColor: '#ffc600', color: '#364182'}}>DNF</Button>
                            <Button style={{padding: '0px', marginLeft: '.424em', backgroundColor: '#ffc600', color: '#364182'}}>Delete Time</Button>
                        </CardSubtitle>
                        <CardSubtitle>Time 2 = {this.state.time2}</CardSubtitle>
                        <CardSubtitle> Time 3 = {this.state.time3}</CardSubtitle>
                        <CardSubtitle>Time 4 = {this.state.time4}</CardSubtitle>
                        <CardSubtitle>Time 5 = {this.state.time5}</CardSubtitle>
                        <br />
                        <CardSubtitle>Best: {this.state.bestTime}</CardSubtitle>
                        <CardSubtitle>Worst: {this.state.worstTime}</CardSubtitle>
                        <CardSubtitle>Average: {this.state.averageTime}</CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default RecentTimes

