import React from 'react';
import api from '../api';

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
    render: function() {
        console.log("this.state " + this.state.value);
        return (
            <div id="taskBar">
                <div className="inlineblock">Search</div>
                <input id="searchBar" type="text" value={this.state.value} onChange={this.handleChange}  />
                <input id="locationBtn" type="submit" value="Search Location" onClick={api.searchLocation.bind(this, this.state.value)} />
            </div>
        );
    }
});

export default TaskBar;

