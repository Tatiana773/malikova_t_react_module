
export const SET_EDIT_ITEM_ACTION = 'SET_EDIT_ITEM_ACTION';
export const RESET_EDIT_ITEM_ACTION = 'RESET_EDIT_ITEM_ACTION';

export const setEditItemAction = ({ id, title, description, categoryId, price, units}) => {
  return{
    type: SET_EDIT_ITEM_ACTION,
    item: {
      id,
      title,
      description,
      categoryId,
      price,
      units,
    }
  }
}
export const resetEditItemAction = () => {
  return{
    type: RESET_EDIT_ITEM_ACTION,
    
  }
}