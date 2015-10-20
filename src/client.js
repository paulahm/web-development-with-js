
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
                Heippis {this.props.name}
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
            </div>
        );
    }
});

const Counterizer = React.createClass({
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

ReactDOM.render(<HelloWorldApp/>, document.getElementById('app'));
