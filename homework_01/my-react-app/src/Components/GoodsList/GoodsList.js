import React, {useCallback, useMemo,} from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemAction, } from '../../Store/items/action';
import { selectItems, } from '../../Store/items/selector';
import { selectCategories } from '../../Store/Categories/selector';
import { useParams, useNavigate, } from 'react-router-dom';
import { setEditItemAction } from '../../Store/App/action';
import PropTypes from 'prop-types';

export const GoodsList = () => {
    const goods = useSelector(selectItems);
    console.log('goods', goods);
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {titleFilt} = useParams();

    const itemsToDisplay = useMemo(() => {
        let returnItems = [];
        if (titleFilt) {
            returnItems = goods.filter((i) => i.title === titleFilt ) 
        } else {
            returnItems = goods;
        }
        return returnItems.map((item) => {
          return {
            ...item,
            category: categories[item.categoryId].name,
          }
        })
    }, [goods,  titleFilt, categories])
        
    const totalPrice = useMemo(()=>{
        let itemPrice = itemsToDisplay.map((item)=>{
            return Number(item.price)*Number(item.units)
        })
       return itemPrice.reduce((sum, cur) => sum + cur,0)
       
    },[itemsToDisplay])
    console.log('totalPrice',totalPrice)
   
    const onRemoveItem = useCallback ((id)=>dispatch(deleteItemAction({id})),[dispatch]);
    
    const onEditingItem = useCallback((id) => {
        const item = goods.find((i) => i.id === id);
        dispatch(setEditItemAction(item));
        navigate('/add');
        }, [goods, dispatch, navigate]);

    const onTitleClicked = useCallback((title) => {
            navigate('/items/' + title);
        },[navigate])

    const onCategoryClicked = useCallback((category) => {
        navigate('/items/' + category);
    },[navigate])

    

    return(
        <table>
            <thead>
                <tr>
                    <td>Назва</td>
                    <td>Опис</td>
                    <td>Тип</td>
                    <td>Ціна, грн</td>
                    <td>Кількість,</td>
                </tr>
            </thead>
            <tbody>
                {itemsToDisplay.map((item) => <GoodsItem
                key={item.id}
                item={item} 
                onDeleteItem = {onRemoveItem}
                onEditItem = {onEditingItem}
                onTitleClicked={onTitleClicked}
                onCategoryClicked={onCategoryClicked}
                />)}
                <p>Total price: {totalPrice} грн</p>
            </tbody>
        </table>
    )
}
GoodsList.propTypes = {
    onDeleteItem: PropTypes.func,
    onEditItem: PropTypes.func,
}
