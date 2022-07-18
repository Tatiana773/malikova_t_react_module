import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM_ACTION = 'ADD_ITEM_ACTION';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';
export const APPLY_EDIT_ACTION = 'APPLY_EDIT_ACTION';

export const addItemAction= ({title, description, category, price, units}) => {
    return {
        type: ADD_ITEM_ACTION,
        goods: {
            id: uuidv4(),
            title,
            description,
            category,
            price,
            units,
        },
    }
}
export const applyEditItemAction = ({title, description, category, price, units, id}) =>{
    return{
        type: APPLY_EDIT_ACTION,
        goods: {
            title,
            description,
            category,
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
