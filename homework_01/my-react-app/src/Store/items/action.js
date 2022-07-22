
export const UPDATE_ITEM_ACTION_REQUEST = 'UPDATE_ITEM_ACTION_REQUEST';
export const UPDATE_ITEM_ACTION_SUCCESS = 'UPDATE_ITEM_ACTION_SUCCESS';
export const UPDATE_ITEM_ACTION_FAILURE = 'UPDATE_ITEM_ACTION_FAILURE';

export const DELETE_ITEM_ACTION_REQUEST = 'DELETE_ITEM_ACTION_REQUEST';
export const DELETE_ITEM_ACTION_SUCCESS = 'DELETE_ITEM_ACTION_SUCCESS';
export const DELETE_ITEM_ACTION_FAILURE = 'DELETE_ITEM_ACTION_FAILURE';

export const FETCH_ITEMS_ACTION_REQUEST = 'FETCH_ITEMS_ACTION_REQUEST';
export const FETCH_ITEMS_ACTION_SUCCESS = 'FETCH_ITEMS_ACTION_SUCCESS';
export const FETCH_ITEMS_ACTION_FAILURE = 'FETCH_ITEMS_ACTION_FAILURE';

export const ADD_ITEM_ACTION_REQUEST = 'ADD_ITEM_ACTION_REQUEST';
export const ADD_ITEM_ACTION_SUCCESS = 'ADD_ITEM_ACTION_SUCCESS';
export const ADD_ITEM_ACTION_FAILURE = 'ADD_ITEM_ACTION_FAILURE';

export const updateItemRequest = (id) =>{
    return{
        type: UPDATE_ITEM_ACTION_REQUEST,
        id,
    }
}
export const updateItemSuccess = (item) =>{
    return{
        type: UPDATE_ITEM_ACTION_SUCCESS,
        item,
    }
}
export const updateItemFailure = (error) =>{
    return{
        type: FETCH_ITEMS_ACTION_FAILURE,
        error,
    }
}
export const addItemRequest = (item) => {
    return {
      type: ADD_ITEM_ACTION_REQUEST,
      item,
    }
  } 

  export const addItemSuccess= (item) => {
    return {
      type: ADD_ITEM_ACTION_SUCCESS,
      item,
    }
  } 

  export const addItemFailure = (error) => {
    return {
      type: ADD_ITEM_ACTION_FAILURE,
      error,
    }
  } 

export const deleteItemRequest = (id) => {
    return {
      type: DELETE_ITEM_ACTION_REQUEST,
      id,
    }
  } 

  export const deleteItemSuccess= (id) => {
    return {
      type: DELETE_ITEM_ACTION_SUCCESS,
      id,
    }
  } 

  export const deleteItemFailure = (error) => {
    return {
      type: DELETE_ITEM_ACTION_FAILURE,
      error,
    }
  } 

export const fetchItemsRequest = () => {
    return{
        type: FETCH_ITEMS_ACTION_REQUEST,
    }
}
export const fetchItemsSuccess = (dataArray) => {
    return{
        type: FETCH_ITEMS_ACTION_SUCCESS,
        items: dataArray,
    }
}
export const fetchItemsFailure = (error) => {
    return{
        type: FETCH_ITEMS_ACTION_FAILURE,
        error,
    }
}
