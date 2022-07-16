import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM_ACTION } from './action';
import { DELETE_ITEM_ACTION } from './action';
import { APPLY_EDIT_ACTION } from './action';

const initialState = {
    goods: [
      {
        id: uuidv4(),
        name: 'Стіл',
        color: 'Білий',
        type: 'Прямокутний',
        category: 'їдальня',
      },
      {
        id: uuidv4(),
        name: 'Стіл',
        color: 'Чорнийй',
        type: 'Округлий',
        category: 'терасса',
      },
      {
        id: uuidv4(),
        name: 'Софа',
        color: 'Зелена',
        type: 'двохмісна',
        category: 'вітальня',
      },
      {
        id: uuidv4(),
        name: 'Диван',
        color: 'Синій',
        type: 'Трьохміснийй',
        category: 'терасса',
      },
      {
        id: uuidv4(),
        name: 'Крісло',
        color: 'Коричневе',
        type: 'Одномісний',
        category: 'вітальня',
      },
      {
        id: uuidv4(),
        name: 'Кресло',
        color: 'Белый',
        type: 'Одномесный',
        category: 'вітальня',
      },
      {
        id: uuidv4(),
        name: 'Стілець',
        color: 'Жовтий',
        type: 'М"який',
        category: 'їдальня',
      }
    ],
    filteredGoods: [],
  }

 export const itemsReducer = (state = initialState, action) =>{
   console.log(action.type)
    switch(action.type){
        case ADD_ITEM_ACTION: return {goods: [...state.goods, action.goods]};
      
        case APPLY_EDIT_ACTION: return {goods: state.goods.map((stateItem) => {
              if (stateItem.id === action.goods.id){
                return action.goods;
              }
              return stateItem;
            })};
        case DELETE_ITEM_ACTION: return {goods: state.goods.filter((item) => item.id !== action.id)};
        
        default: return state;
    }
  
}