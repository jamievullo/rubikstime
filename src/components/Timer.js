import React from 'react'
import Button from 'react-bootstrap/Button'

export default class Timer extends React.Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  }

  handleSessionStart = e => {
    document.addEventListener("keypress", this.handleKeyPress)   
  }

  handleSessionStop = e => {
    document.removeEventListener("keypress", this.handleKeyPress)
  }

  handleKeyPress = e => {
    // onspacebar will start and stop time & hitting enter/return will reset timer
    if (e.keyCode === 32) {
      this.state.timerOn ? this.stopTimer() : this.startTimer()
    } else if (e.keyCode === 13) {
      this.resetTimer()
    }
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    clearInterval(this.timer)
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {

    const { timerTime } = this.state;
    let milliseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    return (
      <div id="stopwatch">
        
        <div className='timer'>
          { minutes } : { seconds } : { milliseconds }
        </div>

          <Button onClick={this.handleSessionStart}>Start Session</Button>
          <Button onClick={this.handleSessionStop}>Stop Session</Button>
          {/* <Button onClick = {this.resetTimer}>Reset Timer</Button> */}

      </div>
    )
  }
}