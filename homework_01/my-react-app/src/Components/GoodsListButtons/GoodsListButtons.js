import React from 'react';
import PropTypes from 'prop-types';

export const GoodsListButtons = ({onAddClicked}) => {
    return(
        <div>
            <button onClick={onAddClicked}>Add Item</button>
        </div>
    )
}

GoodsListButtons.propTypes = {
    onAddClicked: PropTypes.func,
}