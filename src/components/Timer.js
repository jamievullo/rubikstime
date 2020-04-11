import React from 'react'
// import Button from 'react-bootstrap/Button'

export default class Timer extends React.Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    primed: false
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
        primed: true
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
      timerStart: Date.now() - 0,
      primed: false
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  resetTimer = () => {
    clearInterval(this.timer)
    this.props.timesCollection(this.state.timerTime)
    this.setState({
      // timerStart: 0,
      // timerTime: 0,
      timerOn: false,
      primed: false
    });
  };

  render() {
    const color = this.state.primed ? 'green' : '#364182'
    const { timerTime } = this.state;
    let milliseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    return (
      <div id="stopwatch" style={{marginBottom: '2em'}}>
        
        <div className='timer' style={{color: color}}>
          { minutes } : { seconds } : { milliseconds }
        </div>
    
      </div>
    )
  }
}