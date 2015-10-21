
import { Router, Route, Link } from 'react-router'
require('./client.css');
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getTussit(){
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}

const HelloWorld = React.createClass({
    render: function () {
        return (
            <div>
                <Link to={`/hello/${this.props.name}`}>
                    Heippis {this.props.name}
                </Link>
            </div>
        );
    }
});

const HelloWorldApp = React.createClass({
    getInitialState: function(){
        return{
            count: 0,
            tila: 'joku',
            names: [],
        };
    },
    onIncrementCounter: function(){
        this.setState({
            count: this.state.count + 1
        });
    },

    componentDidMount: function(){
        getTussit().then((data) => {
            this.setState({
                names:data
            });
        });

    },
    render: function(){
        const names = this.state.names;
        return(
            <div>
                <h1>Trollotiloiloi!</h1>
                    {names.map((name, key) =>
                        <HelloWorld key={key} name={name} />
                 )}
                <Counterizer count={this.state.count} onIncrementCounter={this.onIncrementCounter} />
                <MegaCounterizer count={this.state.count}  />

                {this.props.children}
            </div>
        );
    }
});

const Counterizer = React.createClass({
    //const = { count, name, onIncrementCounter} = this.props;
    //{count}{name}
    render: function(){
        return(
            <div className="tussi">
                <button onClick={this.props.onIncrementCounter}>MOAR!</button>
                {this.props.count}
            </div>
        );
    }
})

const MegaCounterizer = React.createClass({
    render: function(){
        return(
            <div className="isotila">
                {this.props.count}
            </div>
        );
    }
})

const Greeter = React.createClass({
    render: function() {
        const { name } = this.props.params;
        console.log(this.props);

        return(
            <h1>
                Helloo {name}
            </h1>
        );
    }
});

const routes = (
    <Router>
        <Route path="/" component={HelloWorldApp}>
            <Route path="/hello/:name" component={Greeter}></Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
