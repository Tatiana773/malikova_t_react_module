
export const SET_EDIT_ITEM_ACTION = 'SET_EDIT_ITEM_ACTION';
export const RESET_EDIT_ITEM_ACTION = 'RESET_EDIT_ITEM_ACTION';

export const setEditItemAction = ({ id, title, weight, description, category, }) => {
  return{
    type: SET_EDIT_ITEM_ACTION,
    item: {
      id,
      title,
      weight,
      description,
      category,
    }
  }
}
export const resetEditItemAction = () => {
  return{
    type: RESET_EDIT_ITEM_ACTION,
    
  }
}