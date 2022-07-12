import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemAction } from '../../Store/items/action';
import PropTypes from 'prop-types';

export const GoodsItem = ({item, onDelete, onEdit}) =>{

    const dispatch = useDispatch();

    const onDeleteElement = useCallback(
        (id) => dispatch(deleteItemAction({ id })),
        [dispatch],
      )
        return(
        <tr>
            <td>{item?.name || "-"}</td>
            <td>{item?.color || "-"}</td>
            <td>{item?.type || "-"}</td>
            <td>{item?.category || "-"}</td>
            <td>
                <button onClick={onDelete}>Delete</button>
            </td>
            <td>
                <button onClick={onEdit}>Edit</button>
            </td>
        </tr>
        )
}
GoodsItem.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}