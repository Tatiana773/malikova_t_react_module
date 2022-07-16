
export const SET_EDIT_ITEM_ACTION = 'SET_EDIT_ITEM_ACTION';

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