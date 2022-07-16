export const SHOW_ADD_ITEM_MODAL_ACTION = 'SHOW_ADD_ITEM_MODAL_ACTION';
export const HIDE_ADD_ITEM_MODAL_ACTION = 'HIDE_ADD_ITEM_MODAL_ACTION';
export const SET_EDIT_ITEM_ACTION = 'SET_EDIT_ITEM_ACTION';

export const hideAddItemModalAction = () => {
  return {
    type: HIDE_ADD_ITEM_MODAL_ACTION,
  }
}

export const showAddItemModalAction = () => {
  return {
    type: SHOW_ADD_ITEM_MODAL_ACTION,
  }
} 
export const setEditItemAction = ({ id, name, color, type, category}) => {
  return{
    type: SET_EDIT_ITEM_ACTION,
    item: {
      id,
      name,
      color,
      type,
      category,
    }
  }
}