import React from 'react';
import MapApp from './MapApp';
import EventList from './EventList';

const MapContainer = React.createClass({
    render: function() {
        const { markers } = this.props;
        return (
            <div id="mapContainer">
                <MapApp markers={markers}/>
                <EventList />
            </div>
        );
    }
});

export default MapContainer;

