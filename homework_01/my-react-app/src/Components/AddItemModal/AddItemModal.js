import React, {useState, useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectEditingItem } from '../../Store/App/selector';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './AddItemModal.css';
import PropTypes from 'prop-types';
import { resetEditItemAction } from '../../Store/App/action';
import { addItem, updateItem } from '../../Store/items/thunk';
 
export const AddItemModal = () => {   
    const item = useSelector(selectEditingItem);
    
    console.log("item:",item)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState(item?.title || '');
    const [weight, setWeight] = useState(item?.weight || '');
    const [description, setDescription] = useState(item?.description || '');
    const [category, setCategory] = useState(item?.category || '');
    
    const onChangeTitle = useCallback((event) => {setTitle(event.target.value)}, [setTitle]);

    const onChangeWeight = useCallback((event) => {
        const value = event.target.value;
        const isStringHasOnlyNumbers = /^\d+$/.test(value);
        if (isStringHasOnlyNumbers || !value.length) {
        setWeight(value)}}, [setWeight]);

    const onChangeDescription = useCallback((event) => {setDescription(event.target.value)}, [setDescription]);

    const onChangeCategory = useCallback((event) => {
        const value = event.target.value;
        const isStringHasOnlyNumbers = /^\d+$/.test(value);
        if (isStringHasOnlyNumbers || !value.length) {
        setCategory(value)}}, [setCategory]);

    const onGoBack = useCallback(() => {
        dispatch(resetEditItemAction())
        navigate(-1)
    }, [navigate]);

      const onAddItem = useCallback(() =>{
        dispatch(addItem({
            title,
            weight,
            description,
            category,
        }))
        navigate("/");
      }, [dispatch, navigate, title, weight, description, category, ]);

      const onEditItemClick = useCallback((item) => {
          dispatch(updateItem(item))
          dispatch(resetEditItemAction());
          navigate("/");
        }, [ dispatch, navigate,])
      
    return(
        <div >
            <Box className = "modalForm" component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
            <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue={title}
                variant="standard"
                helperText="Name"
                onChange = {onChangeTitle}/>
            <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue={weight}
                variant="standard"
                helperText="Weight"
                onChange = {onChangeWeight}
                />
            <TextField
                id="standard-helperText"
                defaultValue={description}
                variant="standard"
                helperText="Description"
                onChange = {onChangeDescription}/>
            <TextField
                id="standard-helperText"
                defaultValue={category}
                variant="standard"
                helperText="Type"
                onChange = {onChangeCategory}/>
                <Stack className='buttons' direction="row" spacing={2}>
                    <Button size="medium" variant ="outlined" onClick = {() => {
                        item?.id ? 
                        onEditItemClick({title, weight, description, category, id: item.id}) :
                        onAddItem()}}>{item?.id ? 'Edit': 'Add'}
                    </Button>
                    <Button size="medium" color ="secondary" variant ="outlined" onClick = {onGoBack}>Back</Button>
                </Stack>
            </Box>
        </div>
    )
}
AddItemModal.propTypes = {
    onAddItemClick: PropTypes.func,
    onEditItemClick: PropTypes.func,
    onCloseAddItemModalClick: PropTypes.func,
}