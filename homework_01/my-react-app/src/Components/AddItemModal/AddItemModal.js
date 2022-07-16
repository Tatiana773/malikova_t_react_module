import React, {useState, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectEditingItem } from '../../Store/App/selector';
import './AddItemModal.css';
import PropTypes from 'prop-types';
import { addItemAction, applyEditItemAction } from '../../Store/items/action';

 
export const AddItemModal = () => {   
    const item = useSelector(selectEditingItem);
    console.log("item:",item)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState(item?.name || '');
    const [color, setColor] = useState(item?.color || '');
    const [type, setType] = useState(item?.type || '');
    const [category, setCategory] = useState(item?.category || '');
    

    const onChangeName = useCallback((event) => {setName(event.target.value)}, [setName]);
    const onChangeColor = useCallback((event) => {setColor(event.target.value)}, [setColor]);
    const onChangeType = useCallback((event) => {setType(event.target.value)}, [setType]);
    const onChangeCategory = useCallback((event) => {setCategory(event.target.value)}, [setCategory]);

    const onGoBack = useCallback(() => {
        navigate(-1)
      }, [navigate]);

      const onAddItem = useCallback(() =>{
        dispatch(addItemAction({
            name,
            color,
            type,
            category,
        }))
        navigate("/");
      }, [dispatch, navigate, name, color, type, category]);

      const onEditItemClick = useCallback((item) => {
          dispatch(applyEditItemAction(item))
          navigate("/");
        }, [ dispatch, navigate])
      
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
                <button onClick = {onGoBack}>Back</button>
            </div>
        </div>
    )
}
AddItemModal.propTypes = {
    onAddItemClick: PropTypes.func,
    onEditItemClick: PropTypes.func,
    onCloseAddItemModalClick: PropTypes.func,
}