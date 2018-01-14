import React from 'react';

export default class Button extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <button onClick={this.props.changeName}>Change firstName: {this.props.firstName}</button>
    )

  }

}
