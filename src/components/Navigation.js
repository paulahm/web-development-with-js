import React from 'react';
import LinkTab from './LinkTab';

const Navigation = React.createClass({
    render: function() {
        console.log("Navigation props: " + this.props.links);
        return (
            <nav>
                <h2>EventMap</h2>
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
