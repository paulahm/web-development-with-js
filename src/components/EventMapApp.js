import React from 'react';
import api from '../api';

import Header from './Header';

const EventMapApp = React.createClass({

    getInitialState: function() {
        return {
            count: 0,
            names: [],
        };
    },

    componentDidMount: function() {
        api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });
    },

    render: function() {
        const names = this.state.names;
        const links = [
            { 'id': 0, 'name': 'Tab1', 'url': '/tab1'},
            { 'id': 0, 'name': 'Tab2', 'url': '/tab2'},
            { 'id': 0, 'name': 'Tab3', 'url': '/tab3'}
        ]
        return (
            <div>
                <Header links={links} />
                <h1>Lusso</h1>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter,
                        links: this.state.links
                    }
                )}
            </div>
        );
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    }
});

export default EventMapApp;
