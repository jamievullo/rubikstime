import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle,
    Button
    } from 'reactstrap';

class RecentTimes extends React.Component {
    
    state = {
        time1: this.props.last5[0] || '',
        time2: this.props.last5[1] || '',
        time3: this.props.last5[2] || '',
        time4: this.props.last5[3] || '',
        time5: this.props.last5[4] || '',
        // last5: []
        averageTime: '',      //for rendering of average time
        midThreeAverage: '',  //for rendering of average of 3 middle times
        bestTime: '',         //for rendering best time
        worstTime: ''
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                time1: this.props.last5[0] || '',
                time2: this.props.last5[1] || '',
                time3: this.props.last5[2] || '',
                time4: this.props.last5[3] || '',
                time5: this.props.last5[4] || '',
                // last5: this.props.last5 || [],
                worstTime: this.worstCubeTime(this.props.last5),
                bestTime: this.bestCubeTime(this.props.last5),
                averageTime: this.averageCubeTime(this.props.last5),
                midThreeAverage: this.averageMiddleThreeTimes(this.props.last5)
            })
        }
    }

    worstCubeTime(arg) {
        let arr = arg
        if (arr.length > 1) {
            arr.sort((a, b) => a - b)
            let worstOfFive = arr[arr.length -1]
            return worstOfFive
        } else {
            return arr[0]
        }
    }
    //takes in average time array, sorts it, and returns first index
    //needs to setState of 'bestTime'
    bestCubeTime(arg) {
        let arr = arg
        if (arr.length > 1) {
            arr.sort((a, b) => a - b)
            let bestOfFive = arr[0]
            return bestOfFive
        } else {
            return arr[0]
        }
    }
    //takes in averageTimeArray, adds up all times, divides by array length, returns average
    //needs to setState of 'averageTime'
    //need to call this function somewhere
    averageCubeTime(arg) {
        // let arr = [this.state.time1, this.state.time2, this.state.time3, this.state.time4, this.state.time5];
        let arr = arg
        if (arr.length > 1) {
            let sum = arr.reduce((previous, current) => current += previous);
            let avg = sum / arr.length;
            return avg.toFixed(2)
        } else {
            return arr[0]
        }
    }
    //takes in averageTimeArray, sorts it, removes first and last index, returns new array
    //need to call this function somewhere
    //needs to detState of 'midThreeAverage'
    //need to set conditional to not run until arr has 3 times in it
    averageMiddleThreeTimes(arg) {
        // let arr = [this.state.time1, this.state.time2, this.state.time3, this.state.time4, this.state.time5];
        let arr = arg
        if (arr.length > 3) {
            arr.sort((a,b) => a - b)    
            let newArray = arr.slice(1, -1)
            // arr.shift()
            // arr.pop()
            return this.averageCubeTime(newArray)
        } else {
            return null
        }
        //need to call averageCubeTime function to get average of three remaining times
    }
    //need to display clickable button to add 2 seconds to last recorded time only
    //needs onClick attribute to add 2 seconds to time if necessary 
    //needs to setState of time1 
    //also needs a disable after click
    // plusTwo = () => {
    //     return this.setState({
    //         time1: this.state.time1 + 2000
    //     })
    // }
    //needs onClick to add DNF time to AverageTimeArray
    //still needs to be counted. If more than 3 DNF's, no average of three can be recorded
    //maybe a count of DNF's and a default value for it to be averaged in to averageTime?
    didNotFinish() {

    }
    //when logged in a users best times and overall averages will be called from 
    //the database to pop 
    pushTimesToDatabase() {

    }

    formatTime = time => {
        if (time > 0) {
            let milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
            let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
            let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
        
            return minutes > 0 ? `${minutes}:${seconds}:${milliseconds}` : `${seconds}:${milliseconds}`
        }
    }

    render() {
        // let last5Array = [this.state.time1, this.state.time2, this.state.time3, this.state.time4, this.state.time5]
        // let worstTime = this.worstCubeTime(last5Array)
        // let bestTime = this.bestCubeTime(last5Array)
        // let averageTime = this.averageCubeTime(last5Array)
        // let midThreeAverage = this.averageMiddleThreeTimes(last5Array)

        return (
            <div>
                <Card style={{borderWidth: '.15em', borderColor: '#364182'}}>
                    <CardBody>
                        <CardTitle style={{textAlign: 'center', color: '#364182'}}><strong>Recent Times - {this.props.currentCube}</strong></CardTitle>
                        <div id='recent-times' style={{color: '#364182'}}>
                        <CardSubtitle>
                            Time 1 = <strong>{this.formatTime(this.state.time1)}</strong>   
                            {/* <Button onClick={this.plusTwo} style={{padding: '0px', marginLeft: '.424em', backgroundColor: '#ffc600', color: '#364182'}}>Plus 2</Button> */}
                            {/* <Button style={{padding: '0px', marginLeft: '.424em', backgroundColor: '#ffc600', color: '#364182'}}>DNF</Button> */}
                            <Button style={{padding: '0px', marginLeft: '1.424em', backgroundColor: '#ffc600', color: '#364182'}}>Delete</Button>
                        </CardSubtitle>
                        <CardSubtitle>Time 2 = <strong>{this.formatTime(this.state.time2)}</strong></CardSubtitle>
                        <CardSubtitle> Time 3 = <strong>{this.formatTime(this.state.time3)}</strong></CardSubtitle>
                        <CardSubtitle>Time 4 = <strong>{this.formatTime(this.state.time4)}</strong></CardSubtitle>
                        <CardSubtitle>Time 5 = <strong>{this.formatTime(this.state.time5)}</strong></CardSubtitle>
                        <br />
                        <CardSubtitle>Best: <strong>{this.formatTime(this.state.bestTime)}</strong></CardSubtitle>
                        <CardSubtitle>Worst: <strong>{this.formatTime(this.state.worstTime)}</strong></CardSubtitle>
                        <CardSubtitle>Average: <strong>{this.formatTime(this.state.averageTime)}</strong></CardSubtitle>
                        <CardSubtitle>Average 3: <strong>{this.formatTime(this.state.midThreeAverage)}</strong></CardSubtitle>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default RecentTimes

