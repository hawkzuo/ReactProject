import React from 'react';

export default class TimeButton extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.isStarted ? 'Stop' : 'Resume' }</button>
    )
  }
}
