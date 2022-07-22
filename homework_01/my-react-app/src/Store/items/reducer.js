import { 
  UPDATE_ITEM_ACTION_REQUEST,
  UPDATE_ITEM_ACTION_SUCCESS,
  UPDATE_ITEM_ACTION_FAILURE,
  FETCH_ITEMS_ACTION_SUCCESS,
  FETCH_ITEMS_ACTION_REQUEST,
  FETCH_ITEMS_ACTION_FAILURE,
  DELETE_ITEM_ACTION_REQUEST,
  DELETE_ITEM_ACTION_SUCCESS,
  DELETE_ITEM_ACTION_FAILURE,
  ADD_ITEM_ACTION_REQUEST,
  ADD_ITEM_ACTION_SUCCESS,
  ADD_ITEM_ACTION_FAILURE,
} from './action';

const initialState = {
    goods: [],
    areItemsLoading: false,
    error: null,
    removingItems: {},
    removingItemsError: {},
    isAddingItem: false,
    isAddingItemError: null,
    isUdatingItem: false,
    isUpdatingItemError: null,
  }

 export const itemsReducer = (state = initialState, action) =>{
   console.log(action.type)
    switch(action.type){
        case FETCH_ITEMS_ACTION_REQUEST: return{ ...state, areItemsLoading: true, error: null}
        case FETCH_ITEMS_ACTION_SUCCESS: return {...state, goods: action.items, areItemsLoading: false}
        case FETCH_ITEMS_ACTION_FAILURE: return {...state, areItemsLoading: false, error: action.error}

        case ADD_ITEM_ACTION_REQUEST: return {...state, isAddingItem: true, isAddingItemError: null, }
        case ADD_ITEM_ACTION_SUCCESS: return {...state, isAddingItem: false, goods: [...state.goods, action.item] }
        case ADD_ITEM_ACTION_FAILURE: return {...state, isAddingItem: false, isAddingItemError:true, error: action.error }
       
        case UPDATE_ITEM_ACTION_REQUEST: return {...state, isUdatingItem: true, isAddingItemError: null,} 
        case UPDATE_ITEM_ACTION_SUCCESS: return {
          ...state, 
          isUdatingItem: false,
          goods: state.goods.map((stateItem) => {
              if (stateItem.id === action.item.id){
                return action.item;
              }
              return stateItem;
          })};
        case UPDATE_ITEM_ACTION_FAILURE: return {...state, isUdatingItem: false, isAddingItemError: true, error: action.error}
       
        case DELETE_ITEM_ACTION_REQUEST: return {...state, 
          removingItems: {...state.removingItems, [action.id]: true,},
          removingItemsError: {...state.removingItemsError, [action.id]: null,}
        };
        case DELETE_ITEM_ACTION_SUCCESS: return {...state, 
          removingItems: {...state.removingItems, [action.id]: false,},
         goods: state.goods.filter((item)=>item.id !== action.id),
        };
        case DELETE_ITEM_ACTION_FAILURE: return {...state, 
          removingItems: {...state.removingItems, [action.id]: false,},
          removingItemsError: {...state.removingItemsError, [action.id]: true,
          error: action.error,}
        };

        default: return state;
    }
  
}