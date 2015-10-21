import React from 'react';
import Navigation from './Navigation';

const Header = React.createClass({
    render: function() {
        return (
            <header>
                <Navigation links={this.props.links} />
            </header>
        );
    }
});

export default Header;
