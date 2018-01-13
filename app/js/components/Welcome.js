import React from 'react';
// PropTypes is separated from React module now
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {

  // notice the 'this' keyword :: OOP
  render() {
    return (
      <div>
        <h4> Message from higher level: {this.props.number} </h4>
        <h4> Welcome {this.props.first} !</h4>
      </div>
    );
  }

}

const lengthChecker = ((props, propName, component) => {
	if (props[propName]) {
		let val = props[propName]
		if (typeof val === 'string') {
      // ES6: ``
			return val.length >= 5 ? null : new Error(`${propName} in ${component} is too short`);
		}
	}
	return null;
})

// Data Checking on injected data types
// Only generate warnings, but still will show the data in the ReactDOM
Welcome.propTypes = {
  first: lengthChecker,
  number: PropTypes.string.isRequired,
}

Welcome.defaultProps = {
  number: '10000'
}
