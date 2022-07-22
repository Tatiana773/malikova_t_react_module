import React from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export const GoodsItem = ({item, onDeleteItem=()=>{}, onEditItem=()=>{}, onCategoryClicked=()=>{}, onTitleClicked=()=>{}, deletedItems}) =>{

    const onDelete = useCallback(()=>onDeleteItem(item.id), [item.id, onDeleteItem]);
    const onEdit = useCallback(()=>{onEditItem(item.id)}, [item.id, onEditItem]);
    const onTitleHandler = useCallback(() => {
        onTitleClicked(item.title)
      }, [item.title, onTitleClicked]);
    const onCategoryHandler = useCallback(() => {
        onCategoryClicked(item.category)
    }, [item.category, onCategoryClicked]);

        return(
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell component="td" scope="row" className='click' onClick={onTitleHandler}>{item?.title || "-"}</TableCell>
            <TableCell align="right" >{item?.weight || "-"}</TableCell>
            <TableCell align="right" >{item?.description || "-"}</TableCell>
            <TableCell align="right" className='click' onClick={onCategoryHandler}>{item?.category || "-"}</TableCell>
                {deletedItems ?  
                <CircularProgress/> :
                <Button  size="medium" color="secondary" onClick={onDelete}>Delete</Button>}
                <Button size="medium" onClick={onEdit}>Edit</Button>
        </TableRow>
        )
}
GoodsItem.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}