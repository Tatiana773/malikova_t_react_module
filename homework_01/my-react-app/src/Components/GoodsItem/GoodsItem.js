import React from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';

export const GoodsItem = ({item, onDeleteItem=()=>{}, onEditItem=()=>{}}) =>{

    const onDelete = useCallback(()=>onDeleteItem(item.id), [item.id, onDeleteItem]);
    const onEdit = useCallback(()=>{onEditItem(item.id)}, [item.id, onEditItem]);
  
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