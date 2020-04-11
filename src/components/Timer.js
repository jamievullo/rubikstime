import React from 'react'
// import Button from 'react-bootstrap/Button'

export default class Timer extends React.Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleSessionStart)
  }

  handleSessionStart = e => {
    e.preventDefault()
    e.keyCode === 32 && document.addEventListener("keyup", this.handleKeyPress)
    e.keyCode === 32 && document.addEventListener("keypress", this.zeroOutTimer)   
  }

  handleSessionStop = e => {
    document.removeEventListener("keyup", this.handleKeyPress)
  }

  zeroOutTimer = e => {
    // this.stopTimer()
    if (this.state.timerOn === false ) {
      this.setState({
        timerTime: 0,
        timerStart: 0,
        // timerOn: false
      })
    }
  }

  handleKeyPress = e => {
    // onspacebar will start and stop time & hitting enter/return will reset timer
    if (e.keyCode === 32) {
      
      this.state.timerOn ? this.resetTimer() : this.startTimer()
      
    } else if (e.keyCode === 13) {
      this.resetTimer()
    }
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: 0,
      timerStart: Date.now() - 0
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  // stopTimer = () => {
  //   this.setState({ timerOn: false });
  //   clearInterval(this.timer);
  // };

  resetTimer = () => {
    clearInterval(this.timer)
    this.props.timesCollection(this.state.timerTime)
    this.setState({
      // timerStart: 0,
      // timerTime: 0,
      timerOn: false
    });
  };

  render() {

    const { timerTime } = this.state;
    let milliseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    return (
      <div id="stopwatch" style={{marginBottom: '2em'}}>
        
        <div className='timer' style={{color: '#364182'}}>
          { minutes } : { seconds } : { milliseconds }
        </div>
        {/* <div> */}
          {/* <center> */}

          {/* <Button style={{backgroundColor: '#ffc600', color: '#364182'}} onClick={this.handleSessionStart}>Start Session</Button> */}
          {/* <Button style={{backgroundColor: '#ffc600', color: '#364182', marginLeft: '1em'}} onClick={this.handleSessionStop}>Stop Session</Button> */}
          {/* <Button onClick = {this.resetTimer}>Reset Timer</Button> */}
          {/* </center> */}
        {/* </div> */}

      </div>
    )
  }
}