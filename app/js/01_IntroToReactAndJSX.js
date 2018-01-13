// Documentation: https://reactjs.org/docs

// What is needed for a React Application:
//  - Package Manager [Yarn; npm]
//  - Bundler [webpack; Browserify]
//  - Compiler [Babel]
// *- Server [webpack-dev-server (refresh made only in RAM)]

// ES6 main features
//  - arrow functions [Improvement for 'function']
//  - classes [OOP idea]
//  - template literals
//  - let / const [Improvement for 'var']

// JSX main features
//  - Embed html into JS codes
//  - Produce React "elements"

// const app = document.getElementById('root');
// app.innerHTML = 'First app';

// JSX style syntax -> Much like ruby erb or coffee script

import React from 'react';
import ReactDOM from 'react-dom';

function ElementOld() {
    let name = {
        first: "Patrick",
        last:   "Green"
    };
    return (
        <div>
            <h1> Old JS Style </h1>
            <h2> Example h2 block </h2>
            <h3 className="red"> My name is {name.first} {name.last} </h3>
        </div>
    )
}


// ES6: function body without {} will be inline returning function
const Welcome = ((props) =>
        <h4> Welcome {props.first} !</h4>
);
// which is equivalent to :
const WelcomeExplicit = ((props) => {
    return <h4> Welcome {props.first} !</h4>
});


// JSX: Multiple components should be wrapped in a <div>
// ES6: New Syntax Style
const Element = (() => {
    let name = {
        first: "Patrick",
        last:   "Green"
    };

    const names = ['a', 'b', 'c', 'd'];

    const generateNameList = (() => {
        return names.map((name, i) =>
            <li key={i}>{name}</li>
        )
    });


    // JSX: Event Handler Syntax
    const changeHandler = ((event) => {
        console.log(event.target.id)
    });


    return (
        <div>
            <h1> New JS Style </h1>
            <h2> Example h2 block </h2>
            <h3 className = "red"> My name is {name.first} {name.last} </h3>
            <Welcome first = "oneLineVersion" last = "kkk" />
            <WelcomeExplicit first = "returnVersion" last = "kkk" />
            <h2> Example map callbacks in JSX & ES6 </h2>
            <ul>
                {names.map((name, i) =>
                    <li key={i}>{name}</li>
                )}
            </ul>
            <ul>
                {generateNameList()}
            </ul>
            <input id = 'input-1' onChange={changeHandler}/>
        </div>
    )
});

// This is just another function call
ReactDOM.render(
    <Element />,
    document.getElementById('root')
);
