import { createStore, combineReducers } from 'redux';
import { itemsReducer } from './items/reducer';
import { appReducer } from './App/reducer';
import { categoriesReducer } from './Categories/reducer';


export const store = createStore(combineReducers({
    items: itemsReducer,
    app: appReducer,
    types: categoriesReducer,
  }))