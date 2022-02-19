import React from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import PropTypes from 'prop-types';

export const GoodsList = ({goods, onDeleteItem, onEditItem}) => {
    return(
        <table>
            <tbody>
                {goods.map((item, i) => {
                    return (
                    <GoodsItem
                        key={item.id}
                        item={item} 
                        onDelete = {() => onDeleteItem(item.id)}
                        onEdit = {() => onEditItem(item.id)}/>
                    )
                })}
            </tbody>
        </table>
    )
}
GoodsList.propTypes = {
    onDeleteItem: PropTypes.func,
    onEditItem: PropTypes.func,
}

