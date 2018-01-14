import React from 'react';
import Button from './03Button';
import Timer from './03Timer';

// React States
export default class Layout extends React.Component {

  // ES6
  constructor() {
    super();
    // States: ReactDOM will auto-detect state changes in ReactDOM
    this.state = {
      firstName: 'Patrick',
      isTimerMounted: true
    }
  }

  // the function is passed into Object through 'props'
  changeName() {
    this.setState({
      firstName: 'Jasmine'
    })
  }

  toggleTimer() {
    this.state.isTimerMounted ?
      this.setState({
        isTimerMounted: false
      })
    :
      this.setState({
        isTimerMounted: true
      })
  }

  // ERROR: Uncaught TypeError: Cannot read property 'setState' of undefined
  // Solution: this.hideTimer.bind(this) instead of this.hideTimer

  render() {
    return (
      <div>
        <h1>Index Page </h1>
        <h1>Hello {this.state.firstName}</h1>
        <p>Download the React DevTools for a better development experience: https://fb.me/react-devtools</p>
        <Button firstName={this.state.firstName} changeName={this.changeName.bind(this)} />

        {this.state.isTimerMounted ?
          <div>
            <hr />
            <Timer />
            <hr />
            <Timer />
            <hr />
            <Timer />
          </div>
          : null
        }
        <hr/>
        <button onClick={this.toggleTimer.bind(this)}>{this.state.isTimerMounted ? 'Hide' : 'Show'} Timers</button>

      </div>
    )
  }

}
