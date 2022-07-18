import React from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import './GoodsItem.css';
export const GoodsItem = ({item, onDeleteItem=()=>{}, onEditItem=()=>{}, onCategoryClicked=()=>{}, onTitleClicked=()=>{}}) =>{

    const onDelete = useCallback(()=>onDeleteItem(item.id), [item.id, onDeleteItem]);
    const onEdit = useCallback(()=>{onEditItem(item.id)}, [item.id, onEditItem]);
    const onTitleHandler = useCallback(() => {
        onTitleClicked(item.title)
      }, [item.title, onTitleClicked]);
    const onCategoryHandler = useCallback(() => {
        onCategoryClicked(item.category)
    }, [item.category, onCategoryClicked]);
  
        return(
        <tr>
            <td className='click' onClick={onTitleHandler}>{item?.title || "-"}</td>
            <td>{item?.description || "-"}</td>
            <td className='click' onClick={onCategoryHandler}>{item?.category || "-"}</td>
            <td>{item?.price || "-"}</td>
            <td>{item?.units || "-"}</td>
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