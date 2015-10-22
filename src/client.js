import '../node_modules/normalize.css/normalize.css';
import './structure.css';
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';

import HelloWorld from './components/HelloWorld';
import Counterizer from './components/Counterizer';
import Counter from './components/Counter';
import Greeter from './components/Greeter';
import EventMapApp from './components/EventMapApp';

const routes = (
    <Router>
        <Route path="/" component={EventMapApp}>
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
