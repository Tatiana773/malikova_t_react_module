import { SET_EDIT_ITEM_ACTION, RESET_EDIT_ITEM_ACTION } from './action';

  
  const initialState = {
    editingItem: null,
  }
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EDIT_ITEM_ACTION: return {editingItem: action.item}
      case RESET_EDIT_ITEM_ACTION: return {state}
      default: return state;
    }
  } 