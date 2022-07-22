import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM_ACTION = 'ADD_ITEM_ACTION';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';
export const APPLY_EDIT_ACTION = 'APPLY_EDIT_ACTION';

export const addItemAction= ({title, description, categoryId, price, units}) => {
    return {
        type: ADD_ITEM_ACTION,
        goods: {
            id: uuidv4(),
            title,
            description,
            categoryId,
            price,
            units,
        },
    }
}
export const applyEditItemAction = ({title, description, categoryId, price, units, id}) =>{
    return{
        type: APPLY_EDIT_ACTION,
        goods: {
            title,
            description,
            categoryId,
            price,
            units,
            id,
        },
    }
}

export const deleteItemAction = ({ id }) => {
    return {
      type: DELETE_ITEM_ACTION,
      id,
    }
  } 
