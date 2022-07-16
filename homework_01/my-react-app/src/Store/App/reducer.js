import { SET_EDIT_ITEM_ACTION } from './action';
  
  const initialState = {
    editingItem: null,
  }
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EDIT_ITEM_ACTION: return { isAddItemModalVisible: true, editingItem: action.item}
      default: return state;
    }
  } 