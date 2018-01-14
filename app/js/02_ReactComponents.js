// Chrome: | -> More Tools -> Rendering [Paint Flashing]
//
// ReactDOM: Virtual DOM
// Fast, observe data changes -> repainting only customized changed areas
//

import React from 'react';
import ReactDOM from 'react-dom';
import NameList from './components/02NameList';


// ES6: Classes {wrap all the function into class OOP idea}
// React class version:
// ERROR: _react2.default.createClass is not a function
// Reason: createClass is removed from the latest version of React
// var AppObsolete = React.createClass({
//
//   generateNameList: function() {
//     var names = ['a', 'b', 'c', 'd'];
//
//     return names.map((name, i) =>
//         <li key={i}>{name}</li>
//     );
//   },
//
//   render: function() {
//     return (
//       <div>
//           <h1> New JS Style </h1>
//           <h2> Example h2 block </h2>
//           <Welcome first = "oneLineVersion" last = "kkk" />
//           <WelcomeExplicit first = "returnVersion" last = "kkk" />
//           <h2> Example map callbacks in JSX & ES6 </h2>
//           <ul>
//               {names.map((name, i) =>
//                   <li key={i}>{name}</li>
//               )}
//           </ul>
//           <ul>
//               {generateNameList()}
//           </ul>
//           <input id = 'input-1' onChange={changeHandler}/>
//       </div>
//     );
//   }
// })
// ES6 version:
// ERROR: Super expression must either be null or a function, not undefined
// Reason: Typo Component as 'component'

ReactDOM.render(
    <div>
      <NameList number='1'/>
      <NameList number='2'/>
    </div>,
    document.getElementById('root')
);
