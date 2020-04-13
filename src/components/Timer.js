import React from 'react'

export default class Timer extends React.Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    primed: false
  }

  componentDidMount() {
    document.querySelector('.navbar').addEventListener("click", this.handleSessionStop)
    document.addEventListener("keypress", this.handleSessionStart)
    document.querySelector('#stopwatch').addEventListener("click", this.handleSessionStart)
  }

  // componentWillUnmount() {
  //   document.getElementById('home-container').removeEventListener("mouseenter", this.handleSessionStart)
  // }

  handleSessionStart = e => {
    e.preventDefault()
    // console.log("session start")
    document.addEventListener("keyup", this.handleKeyPress)
    document.addEventListener("keypress", this.zeroOutTimer)   
  }

  handleSessionStop = e => {
    // console.log("session stop")
    document.removeEventListener("keypress", this.handleSessionStart)
    document.removeEventListener("keyup", this.handleKeyPress)
    document.removeEventListener("keypress", this.zeroOutTimer)
  }

  zeroOutTimer = e => {
    e.preventDefault()
    if (this.state.timerOn === false && e.keyCode === 32) {
      this.setState({
        timerTime: 0,
        timerStart: 0,
        primed: true
      })
    }
  }

  handleKeyPress = e => {
    e.preventDefault()
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