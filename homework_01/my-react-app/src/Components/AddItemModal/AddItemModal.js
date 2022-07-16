import React, {useState, useCallback} from 'react';
import { selectItems } from '../../Store/items/selector';
import { useDispatch, useSelector } from 'react-redux';
import { hideAddItemModalAction, } from '../../Store/App/action';
import { selectEditingItem } from '../../Store/App/selector';
import './AddItemModal.css';
import PropTypes from 'prop-types';
import { addItemAction, applyEditItemAction } from '../../Store/items/action';

 
export const AddItemModal = () => {   
    const item = useSelector(selectEditingItem);
    console.log("item:",item)
    
    const dispatch = useDispatch();

    const [name, setName] = useState(item?.name || '');
    const [color, setColor] = useState(item?.color || '');
    const [type, setType] = useState(item?.type || '');
    const [category, setCategory] = useState(item?.category || '');
    

    const onChangeName = useCallback((event) => {setName(event.target.value)}, [setName]);
    const onChangeColor = useCallback((event) => {setColor(event.target.value)}, [setColor]);
    const onChangeType = useCallback((event) => {setType(event.target.value)}, [setType]);
    const onChangeCategory = useCallback((event) => {setCategory(event.target.value)}, [setCategory]);

    const onHideModal = useCallback(() => {
        dispatch(hideAddItemModalAction())
      }, [dispatch]);

      const onAddItem = useCallback(() =>{
        onHideModal();
        dispatch(addItemAction({
            name,
            color,
            type,
            category,
        }))
      }, [dispatch, name, color, type, category]);

      const onEditItemClick = useCallback((item) => {
          dispatch(applyEditItemAction(item))
        }, [ dispatch])
      
    return(
        <div className = "modalForm">
            <div>
                <p>Name:</p>
                <input value = {name} onChange = {onChangeName}/>
                <p>Color:</p>
                <input value = {color} onChange = {onChangeColor}/>
                <p>Type:</p>
                <input value = {type} onChange = {onChangeType}/>
                <p>Category:</p>
                <select value = {category} onChange={onChangeCategory}>
                    <option selected disabled>Зона расстановки</option>
                    <option>спальня</option>
                    <option>столовая</option>
                    <option>гостинная</option>
                    <option>терасса</option>
                </select>
                <button onClick = {() => {
                 item?.id ? 
                 onEditItemClick({name, color, type, category, id: item.id}) :
                 onAddItem()}}>{item?.id? 'Edit': 'Add'}</button>
                <button onClick = {onHideModal}>Close</button>
            </div>
        </div>
    )
}
AddItemModal.propTypes = {
    onAddItemClick: PropTypes.func,
    onEditItemClick: PropTypes.func,
    onCloseAddItemModalClick: PropTypes.func,
}