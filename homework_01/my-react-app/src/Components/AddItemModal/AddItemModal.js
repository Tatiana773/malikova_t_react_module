import React, {useState, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectEditingItem } from '../../Store/App/selector';
import './AddItemModal.css';
import PropTypes from 'prop-types';
import { addItemAction, applyEditItemAction } from '../../Store/items/action';
import { resetEditItemAction } from '../../Store/App/action';

 
export const AddItemModal = () => {   
    const item = useSelector(selectEditingItem);
    console.log("item:",item)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState(item?.title || '');
    const [description, setDescription] = useState(item?.description || '');
    const [category, setCategory] = useState(item?.categoryId || '');
    const [price, setPrice] = useState(item?.price || '');
    const [units, setUnits] = useState(item?.units || '');
    

    const onChangeTitle = useCallback((event) => {setTitle(event.target.value)}, [setTitle]);
    const onChangeDescription = useCallback((event) => {setDescription(event.target.value)}, [setDescription]);
    const onChangeCategory = useCallback((event) => {
        const value = event.target.value;
        const isStringHasOnlyNumbers = /^\d+$/.test(value);
        if (isStringHasOnlyNumbers || !value.length) {
        setCategory(value)}}, [setCategory]);

    const onChangePrice = useCallback((event) => {
        const value = event.target.value;
        const isStringHasOnlyNumbers = /^\d+$/.test(value);
        if (isStringHasOnlyNumbers || !value.length) {
        setPrice(value);
    }}, [setPrice]);
    const onChangeUnits = useCallback((event) => {
        const value = event.target.value;
        const isStringHasOnlyNumbers = /^\d+$/.test(value);
        if (isStringHasOnlyNumbers || !value.length) {
        setUnits(event.target.value);
    }}, [setUnits]);

    const onGoBack = useCallback(() => {
        navigate(-1)
    }, [navigate]);

      const onAddItem = useCallback(() =>{
        dispatch(addItemAction({
            title,
            description,
            category,
            price,
            units,
        }))
        navigate("/");
      }, [dispatch, navigate, title, description, category, price, units]);

      const onEditItemClick = useCallback((item) => {
          dispatch(applyEditItemAction(item))
          dispatch(resetEditItemAction());
          navigate("/");
        }, [ dispatch, navigate,])
      
    return(
        <div className = "modalForm">
            <div>
                <p>Назва:</p>
                <input value = {title} onChange = {onChangeTitle}/>
                <p>Опис:</p>
                <input value = {description} onChange = {onChangeDescription}/>
                <p>Тип:</p>
                <input value = {category} onChange = {onChangeCategory}/>
                <p>Ціна:</p>
                <input value = {price} onChange = {onChangePrice}/>
                <p>Кількість:</p>
                <input value = {units} onChange = {onChangeUnits}/>
                
                <button onClick = {() => {
                 item?.id ? 
                 onEditItemClick({title, description, category, price, units, id: item.id}) :
                 onAddItem()}}>{item?.id ? 'Edit': 'Add'}</button>
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