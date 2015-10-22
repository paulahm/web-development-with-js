import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';


const MapApp = React.createClass({
    componentDidMount: function() {
        /*api.getTussit().then((data) => {
            this.setState({
                names: data
            });
        });*/



            /*{
            markers.map((marker, index) => {
            return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
                );
            })}*/
    },
    render: function() {
        const { markers } = this.props;
        console.log('MapApp markers' + markers);
        return(
            <div id="map">
                <GoogleMap containerProps={{
                    style: {
                        height: "100%",
                        width: "100%"
                    },
                }}
                    defaultZoom={15}
                    defaultCenter={{lat: 60.193425, lng: 24.921112}}
                >
                </GoogleMap>
            </div>
        );
    }
});

export default MapApp;
