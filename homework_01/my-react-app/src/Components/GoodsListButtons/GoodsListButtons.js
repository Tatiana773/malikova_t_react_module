import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {showAddItemModalAction} from '../../Store/App/action';
import PropTypes from 'prop-types';

export const GoodsListButtons = () => {
    const dispatch = useDispatch();
    const onAddClicked = useCallback(()=>{dispatch(showAddItemModalAction())},[dispatch]);
    return(
        <div>
            <button onClick={onAddClicked}>Add Item</button>
        </div>
    )
}

GoodsListButtons.propTypes = {
    onAddClicked: PropTypes.func,
}