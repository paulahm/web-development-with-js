import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Router, Route, Link, IndexRoute } from 'react-router';

import HelloWorld from './components/HelloWorld';
import Counterizer from './components/Counterizer';
import Counter from './components/Counter';
import Greeter from './components/Greeter';
import Index from './components/Index';
import HelloWorldApp from './components/HelloWorldApp';

function getTussit() {
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}

const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <IndexRoute component={Index} />
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('app')
);
