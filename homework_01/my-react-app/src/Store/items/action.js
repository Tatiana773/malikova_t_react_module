import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM_ACTION = 'ADD_ITEM_ACTION';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';
export const APPLY_EDIT_ACTION = 'APPLY_EDIT_ACTION';

export const addItemAction= ({name, color, type, category}) => {
    return {
        type: ADD_ITEM_ACTION,
        goods: {
            id: uuidv4(),
            name,
            color,
            type,
            category,
        },
    }
}
export const applyEditItemAction = ({name, color, type, category, id}) =>{
    return{
        type: APPLY_EDIT_ACTION,
        goods: {
            name,
            color,
            type,
            category,
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

