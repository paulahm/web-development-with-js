import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';

import HelloWorld from './components/HelloWorld';
import Counterizer from './components/Counterizer';
import Counter from './components/Counter';
import Greeter from './components/Greeter';
import Index from './components/Index';
import EventMapApp from './components/EventMapApp';

const routes = (
    <Router>
        <Route path="/" component={EventMapApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
