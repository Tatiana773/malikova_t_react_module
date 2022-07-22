import { 
    fetchItemsRequest, 
    fetchItemsSuccess, 
    fetchItemsFailure,
    deleteItemRequest, 
    deleteItemSuccess, 
    deleteItemFailure,
    addItemRequest, 
    addItemSuccess, 
    addItemFailure,
    updateItemRequest,
    updateItemSuccess, 
    updateItemFailure 
} from "./action";

const baseUrl = 'http://127.0.0.1:8080';

export const updateItem = (item) =>{
    return async(dispatch, getState) => {
        dispatch(updateItemRequest(item.id));
        try{
            const responce = await fetch(baseUrl + '/goods/' + item.id, 
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            if(responce.ok){
                const data = await responce.json();
                dispatch(updateItemSuccess(data));
            }else{
                dispatch(updateItemFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(addItemFailure(error.message));
        }
    }
}

export const addItem = (item) =>{
    return async(dispatch, getState) => {
        dispatch(addItemRequest(item));
        try{
            const responce = await fetch(baseUrl + '/goods/', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });
            if(responce.ok){
                const data = await responce.json();
                dispatch(addItemSuccess(data));
            }else{
                dispatch(addItemFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(addItemFailure(error.message));
        }
    }
}

export const deleteItem = (id) =>{
    return async(dispatch, getState) => {
        dispatch(deleteItemRequest(id));
        try{
            const responce = await fetch(baseUrl + '/goods/' + id, {method: 'DELETE'});
            if(responce.ok){
                const data = await responce.json();
                dispatch(deleteItemSuccess(id));
            }else{
                dispatch(deleteItemFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(deleteItemFailure(error.message));
        }
    }
}
export const fetchItems = () => {
    return async(dispatch, getState) => {
        dispatch(fetchItemsRequest());
        try{
            const responce = await fetch(baseUrl + '/goods');
            if(responce.ok){
                const data = await responce.json();
                dispatch(fetchItemsSuccess(data.goods));
            }else{
                dispatch(fetchItemsFailure('Something went wrong'));
            }
        }
        catch(error){
            dispatch(fetchItemsFailure(error.message));
        }
    }
}