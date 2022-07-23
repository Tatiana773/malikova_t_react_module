
import { ADD_CATEGORY_ACTION, DELETE_CATEGORY_ACTION, EDIT_CATEGORY_ACTION } from './action';

const initialState = {
  categories: {
    0: {
      id: 0,
      name: 'Вітальня'
    },
    1: {
      id: 1,
      name: 'Спальня'
    },
    2: {
      id: 2,
      name: 'Їдальня'
    },
    3: {
      id: 3,
      name: 'Тераса'
    },
  }
}

export const categoriesReducer = (state = initialState, action) => {
  console.log('action: ', action);
  console.log('state: ', state);
  switch (action.type) {
    case ADD_CATEGORY_ACTION:
      return {
        categories: {
            ...state.categories,
           
            [action.category.id]: action.category,
          }
      }
    case DELETE_CATEGORY_ACTION:
      return {
        categories:{
          ...state.categories,
          [action.id]: null,
        }
        
      };
    case EDIT_CATEGORY_ACTION:
      return {
        categories: {
          ...state.categories,
          [action.category.id]: action.category,
        }
      }
    default:
      return state;
  }
} 