import React from 'react';
import Timer from './03Timer';
import FilterableNameList from './04FilterableNameList';
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

        {this.state.isTimerMounted ?
          <div>
            <hr />
            <Timer />
            <hr />
          </div>
          : null
        }
        <hr/>
        <button onClick={this.toggleTimer.bind(this)}>{this.state.isTimerMounted ? 'Hide' : 'Show'} Timers</button>
        <FilterableNameList names={this.props.names} />
      </div>
    )
  }

}
