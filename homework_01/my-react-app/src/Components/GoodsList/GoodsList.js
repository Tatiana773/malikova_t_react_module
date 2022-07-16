import React, { useCallback } from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemAction, } from '../../Store/items/action';
import { selectItems } from '../../Store/items/selector';
import { showAddItemModalAction, setEditItemAction } from '../../Store/App/action';
import PropTypes from 'prop-types';

export const GoodsList = () => {
    const goods = useSelector(selectItems);
    console.log("goods:", goods);

    const dispatch = useDispatch();

    const onRemoveItem = useCallback ((id)=>dispatch(deleteItemAction({id})),[dispatch]);
    
    const onEditingItem = useCallback((id) => {
        const item = goods.find((i) => i.id === id);
        dispatch(setEditItemAction(item));
        }, [goods, dispatch])

    return(
        <table>
            <tbody>
                {goods.map((item) => {
                    return (
                    <GoodsItem
                        key={item.id}
                        item={item} 
                        onDeleteItem = {onRemoveItem}
                        onEditItem = {onEditingItem}
                        />   
                    )})}
            </tbody>
        </table>
    )
}
GoodsList.propTypes = {
    onDeleteItem: PropTypes.func,
    onEditItem: PropTypes.func,
}
