import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { itemsReducer } from './items/reducer';
import { appReducer } from './App/reducer';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const store = createStore(combineReducers({
    items: itemsReducer,
    app: appReducer,
  }), applyMiddleware(logger, thunk));

  console.log('store: ', store.getState()); 