import React from 'react';
import {TimerHeader} from './Timer/TimerHeader';
import TimeButton from './Timer/TimeButton';


// State is binded to the class, & will influence any sub-classes that
// utilize this state

export default class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      time: 0,
      isStarted: false
    }
    // short-hand for .bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // Each time reMounted will re-run these initializations
  // Much like constructor & destructor
  // Callback after the Mount operation
  componentDidMount() {
    // this.startTimer VS this.startTimer()
    // setInterval() function will keep calling the 1st arg passed into
    this.timer = setInterval(() => this.startTimer(), 1000)
    this.setState({
      isStarted: true
    })
  }

  // Callback before the Unmount operation
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  startTimer() {
    console.log('start Fired')

    this.setState(prevState => ({
      time: prevState.time += 1
    }))
    this.setState({
      isStarted: true
    })
  }
  endTimer() {
    console.log('end Fired')

    clearInterval(this.timer)
    this.setState({
      isStarted: false
    })
  }


  handleClick() {
    // Operation based on whether the timer is started
    this.state.isStarted ?
      this.endTimer() :
      this.timer = setInterval(() => this.startTimer(), 1000)
    console.log(this.state.isStarted)
  }


  render() {
    return (
      <div>
        <h2>Running Times(s): {this.state.time}</h2>
        <TimerHeader time={this.state.time} />
        <button onClick={this.handleClick}>Stop/Resume</button>
        <TimeButton handleClick={this.handleClick} isStarted={this.state.isStarted}  />
      </div>
    )
  }
}
