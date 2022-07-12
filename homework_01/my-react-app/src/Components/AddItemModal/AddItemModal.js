import React, {useState, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { hideAddItemModalAction } from '../../Store/App/action';
import './AddItemModal.css';
import PropTypes from 'prop-types';

 
export const AddItemModal = ({ item, onAddItemClick, onEditItemClick, }) => {   
    
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
      }, [dispatch])


    return(
        <div className = "modalForm">
            <form onSubmit = {() => {
                 item?.id ? 
                 onEditItemClick({name, color, type, category, id: item.id}) :
                 onAddItemClick(name, color, type, category)}}>
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
                <button>{item?.id? 'Edit': 'Add'}</button>
                <button onClick = {onHideModal}>Close</button>
            </form>
        </div>
    )
}
AddItemModal.propTypes = {
    onAddItemClick: PropTypes.func,
    onEditItemClick: PropTypes.func,
    onCloseAddItemModalClick: PropTypes.func,
}