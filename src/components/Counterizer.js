import React from 'react';

const Counterizer = React.createClass({
    render: function() {
        const { count, name, onIncrementCounter } = this.props;
        return (
            <div className="tussi">
                {count}
                {name}

                <button
                    onClick={onIncrementCounter}>
                    MOAR!
                </button>
            </div>
        );
    }
});

export default Counterizer;
