// Chrome: | -> More Tools -> Rendering [Paint Flashing]
//
// ReactDOM: Virtual DOM
// Fast, observe data changes -> repainting only customized changed areas
//

import React from 'react';
import ReactDOM from 'react-dom';
// React-Router
import {Router,Route, hashHistory} from 'react-router';

import Layout from './components/05Layout';
import Timer from './components/03Timer';
import FilterableNameList from './components/05FilterableNameList';

// React-Router is not directly accessed by HTTP GET method
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <Route path="timer" component={Timer} />
        <Route path="namelist" component={FilterableNameList} />
      </Route>
    </Router>,
    document.getElementById('root')
);
