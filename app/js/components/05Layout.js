import React from 'react';
import Timer from './03Timer';
import FilterableNameList from './05FilterableNameList';
import data from '../../data/data';

// React States
export default class Layout extends React.Component {

  // ES6
  constructor() {
    super();
    // States: ReactDOM will auto-detect state changes in ReactDOM
    this.state = {
      firstName: 'Patrick',
    }
  }

  // the function is passed into Object through 'props'
  changeName() {
    this.setState({
      firstName: 'Jasmine'
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
        <FilterableNameList names={data} />
      </div>
    )
  }
}

// CSS Styler
const TimerStyler = (props) => {
  const bgColor = {
    backgroundColor: 'yellow'
  }
  return <h3 style={bgColor}>{props.children}</h3>
}
