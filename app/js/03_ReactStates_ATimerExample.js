// Chrome: | -> More Tools -> Rendering [Paint Flashing]
//
// ReactDOM: Virtual DOM
// Fast, observe data changes -> repainting only customized changed areas
//

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/03Layout';

// A simple timer example
class App extends React.Component {

  render() {
    return  <Layout />
  }
}

ReactDOM.render(
    <div>
      <App />
    </div>,
    document.getElementById('root')
);
