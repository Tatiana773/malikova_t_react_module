import React from 'react';
import PropTypes from 'prop-types';

export const GoodsItem = ({item, onDelete, onEdit}) =>{
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