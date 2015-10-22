import React from 'react';
import api from '../api';
require('google-geocoding');

const TaskBar = React.createClass({
    getInitialState:function(){
        return{
            value: "Helsinki"
        }
    },
    handleChange: function(e){
        console.log(e.target.value);
        this.setState({
            value:e.target.value
        });
    },
    alertValue: function() {
        alert(this.state.value);
    },
    geoCode:function(){
        google_geocoding.geocode(this.state.value, function(err, location) {
        if( err ) {
            console.log('Error: ' + err);
        } else if( !location ) {
            console.log('No result.');
        } else {
            console.log('Latitude: ' + location.lat + ' ; Longitude: ' + location.lng);
        }
        });
    },
    render: function() {
        console.log("this.state " + this.state.value);
        return (
            <div id="taskBar">
                <div className="inlineblock">Search</div>
                <input id="searchBar" type="text" value={this.state.value} onChange={this.handleChange}  />
                <input id="locationBtn" type="submit" value="Search Location" onClick={this.geoCode} />
            </div>
        );
    }
});

export default TaskBar;

