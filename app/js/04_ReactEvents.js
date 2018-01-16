// Chrome: | -> More Tools -> Rendering [Paint Flashing]
//
// ReactDOM: Virtual DOM
// Fast, observe data changes -> repainting only customized changed areas
//

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/04Layout';
import data from '../data/data';
// A simple timer example
class App extends React.Component {

  render() {
    return  <Layout names={data}/>
  }
}

ReactDOM.render(
    <div>
      <App />
    </div>,
    document.getElementById('root')
);
