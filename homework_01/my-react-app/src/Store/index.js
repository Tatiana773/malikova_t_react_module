import { createStore, combineReducers } from 'redux';
import { itemsReducer } from './items/reducer';
import { appReducer } from './App/reducer';

export const selectItems = (state) => state.items.goods;
export const selectIsAddItemModalVisible = (state) => state.app.isAddItemModalVisible; 

export const store = createStore(combineReducers({
    items: itemsReducer,
    app: appReducer,
  }))