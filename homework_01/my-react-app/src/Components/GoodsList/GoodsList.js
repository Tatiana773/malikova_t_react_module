import React, {useCallback, useEffect,} from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, fetchItems, } from '../../Store/items/thunk';
import { selectItems, selectAreItemsLoading, selectItemsError, selectRemovingItems, } from '../../Store/items/selector';
import { useNavigate, } from 'react-router-dom';
import { setEditItemAction } from '../../Store/App/action';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const GoodsList = () => {
    const goods = useSelector(selectItems);
    const areItemsLoading = useSelector(selectAreItemsLoading);
    const itemsError = useSelector(selectItemsError);
    const removingItems = useSelector(selectRemovingItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() =>{
        dispatch(fetchItems());
    },[dispatch]);
   
    const onRemoveItem = useCallback ((id)=>dispatch(deleteItem(id)),[dispatch]);
    
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

    if(areItemsLoading){
        return(
        <Stack sx={{ color: 'grey.500' }}>
          <CircularProgress color="inherit" />
        </Stack>
        )
    }
    if(itemsError){
        return(
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {itemsError}
        </Alert>
        )
    }
   
    return(
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Weight</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {goods.map((item) => <GoodsItem
                key={item.id}
                item={item} 
                deletedItems={removingItems[item.id]}
                onDeleteItem = {onRemoveItem}
                onEditItem = {onEditingItem}
                onTitleClicked={onTitleClicked}
                onCategoryClicked={onCategoryClicked}
                />)}
                </TableBody>
          </Table>
        </TableContainer>
    )
}
GoodsList.propTypes = {
    onDeleteItem: PropTypes.func,
    onEditItem: PropTypes.func,
}
