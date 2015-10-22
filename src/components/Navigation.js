import React from 'react';
import { Link } from 'react-router';
import LinkTab from './LinkTab';

const Navigation = React.createClass({
    render: function() {
        console.log("Navigation props: " + this.props.links);
        return (
            <nav>
                <Link to="/">
                    <div id="logo" />
                </Link>
                <div id="powered">Powered by
                    <a href="http://last.fm">Last.fm</a> &
                    <a href="https://developers.google.com/maps/documentation/javascript/">Google Maps</a>
                </div>
                <ul>
                    {this.props.links.map(function(link){
                        return(
                            <LinkTab url={link.url} name={link.name} />
                        );
                    })}
                </ul>
            </nav>
        );
    }
});

export default Navigation;
