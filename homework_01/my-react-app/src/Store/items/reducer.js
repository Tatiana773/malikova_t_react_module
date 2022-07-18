import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM_ACTION, DELETE_ITEM_ACTION, APPLY_EDIT_ACTION,} from './action';

const initialState = {
    goods: [
      {
        id: uuidv4(),
        title: 'Стіл',
        description: 'Білий',
        categoryId: 0,
        price: '5000',
        units: '2',
      },
      {
        id: uuidv4(),
        title: 'Стіл',
        description:'Чорнийй',
        categoryId: 2,
        price: '6000',
        units: '3',
      },
      {
        id: uuidv4(),
        title: 'Софа',
        description: 'Зелена',
        categoryId: 1,
        price: '20000',
        units: '10',
      },
      {
        id: uuidv4(),
        title: 'Диван',
        description: 'Синій',
        categoryId: 3,
        price: '25000',
        units: '1',
      },
      {
        id: uuidv4(),
        title: 'Крісло',
        description: 'Коричневе',
        categoryId: 3,
        price: '10000',
        units: '2',
      },
      {
        id: uuidv4(),
        title: 'Крісло',
        description: 'Біле',
        categoryId: 0,
        price: '7000',
        units: '4',
      },
      {
        id: uuidv4(),
        title: 'Стілець',
        description: 'Жовтий',
        categoryId: 1,
        price: '1000',
        units: '10',
      }
    ],
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