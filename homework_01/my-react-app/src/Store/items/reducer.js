import {v4 as uuidv4} from 'uuid';
import { ADD_ITEM_ACTION } from './action';
import { DELETE_ITEM_ACTION } from './action';


const initialState = {
    goods: [
      {
        id: uuidv4(),
        name: 'Стол',
        color: 'Белый',
        type: 'Прямоугольный',
        category: 'столовая',
      },
      {
        id: uuidv4(),
        name: 'Стол',
        color: 'Черный',
        type: 'Круглый',
        category: 'терасса',
      },
      {
        id: uuidv4(),
        name: 'Диван',
        color: 'Зеленый',
        type: 'двумесный',
        category: 'гостинная',
      },
      {
        id: uuidv4(),
        name: 'Диван',
        color: 'Синий',
        type: 'Трехместный',
        category: 'терасса',
      },
      {
        id: uuidv4(),
        name: 'Кресло',
        color: 'Коричневый',
        type: 'Одномесный',
        category: 'спальня',
      },
      {
        id: uuidv4(),
        name: 'Кресло',
        color: 'Белый',
        type: 'Одномесный',
        category: 'гостинная',
      },
      {
        id: uuidv4(),
        name: 'Стул',
        color: 'Желтый',
        type: 'Мягкий',
        category: 'столовая',
      }
    ],
    filteredGoods: [],
  }

 export const itemsReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_ITEM_ACTION: return {goods: [...state.goods, action.goods]};
        case DELETE_ITEM_ACTION: return {goods: state.goods.filter((item) => item.id !== action.id)};
        
       
        default: return state;
    }
  
}
    // export const selectItems = (state) => state.goods;
    // export const store = createStore(itemsReducer)