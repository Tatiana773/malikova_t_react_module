import { HIDE_ADD_ITEM_MODAL_ACTION, SHOW_ADD_ITEM_MODAL_ACTION, SET_EDIT_ITEM_ACTION } from './action';
  
  const initialState = {
    isAddItemModalVisible: false,
    editingItem: null,
  }
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case HIDE_ADD_ITEM_MODAL_ACTION: return { state }
      case SHOW_ADD_ITEM_MODAL_ACTION: return { isAddItemModalVisible: true, }
      case SET_EDIT_ITEM_ACTION: return { isAddItemModalVisible: true, editingItem: action.item}
      default: return state;
    }
  } 