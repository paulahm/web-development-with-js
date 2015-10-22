import React from 'react';
import api from '../api';
import { Map } from 'immutable';

import Header from './Header';
import Dialog from './Dialog';
import TaskBar from './TaskBar';
import MapContainer from './MapContainer';


const EventMapApp = React.createClass({

    getInitialState: function() {
        return {
            count: 0,
            names: [],
            markers: Map([
                {marker:
                    {'index': 0,
                    'name':'marker1',
                    'latitude':65.012615,
                    'longtitude':25.471453
                     }
                },
                {marker: {
                    'index': 1,
                    'name':'marker2',
                    'latitude':60.173324,
                    'longtitude':24.941025
                    }
                }
            ])
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
            { 'id': 0, 'name': 'Login', 'url': '/'},
        ]
        return (
            <div>
                <Header links={links} />
                <Dialog />
                <TaskBar />
                <MapContainer markers={this.state.markers}/>

                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        names: this.state.names,
                        count: this.state.count,
                        onIncrementCounter: this.incrementCounter,
                        markers: this.state.markers
                    }
                )}
            </div>
        );
    },

    incrementCounter: function() {
        this.setState({
            count: this.state.count + 1
        });
    },

    setMarkers: function(newMarkers) {
        this.setState({
            markers: newMarkers
        });
    }
});

export default EventMapApp;
