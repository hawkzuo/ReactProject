// Chrome: | -> More Tools -> Rendering [Paint Flashing]
//
// ReactDOM: Virtual DOM
// Fast, observe data changes -> repainting only customized changed areas
//

import React from 'react';
import ReactDOM from 'react-dom';
import NameList from './components/NameList';



ReactDOM.render(
    <div>
      <NameList number='1'/>
      <NameList number='2'/>
    </div>,
    document.getElementById('root')
);
