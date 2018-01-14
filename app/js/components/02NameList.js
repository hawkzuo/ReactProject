import React from 'react';
import Welcome from './02Welcome';

// ES6: function body without {} will be inline returning function

export default class NameList extends React.Component {

  nameWrapper(nameArray) {
    return nameArray.map((name, i) =>
        <li key={i}>{name}</li>
    )
  }

  render () {
    const nameArray = ['a', 'b', 'c', 'dke']
    return (
      <div>
        <h1> New JS Style </h1>
        <h2> Example h2 block </h2>
        <h2> Example map callbacks in JSX & ES6 </h2>
        <h2> Fields injected: {this.props.number} </h2>
        <Welcome first = "oneLineVersion" last = "kkk" number = {this.props.number}/>
        <Welcome first = "retu" last = "kkk" />
        <ul>
            {nameArray.map((name, i) =>
                <li key={i}>{name}</li>
            )}
        </ul>
        <ul>
            {this.nameWrapper(nameArray)}
        </ul>
        <hr/>
      </div>
    )
  }
}
