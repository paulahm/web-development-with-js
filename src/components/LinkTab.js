import React from 'react';
import { Link } from 'react-router';

const LinkTab = React.createClass({
    render: function() {
        return (
            <li>
                <Link to={this.props.url}>
                    {this.props.name}
                </Link>
            </li>
        );
    }
});

export default LinkTab;
