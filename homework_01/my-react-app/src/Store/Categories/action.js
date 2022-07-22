export const ADD_CATEGORY_ACTION = 'ADD_CATEGORY_ACTION';
export const DELETE_CATEGORY_ACTION = 'DELETE_CATEGORY_ACTION';
export const EDIT_CATEGORY_ACTION = 'EDIT_CATEGORY_ACTION';

export const addCategoryAction = ({name, id}) => {
    return{
        type: ADD_CATEGORY_ACTION,
        category: {
            name,
            id,
        },
    }
}
export const deleteCategoryAction = ({id}) =>{
    return{
        type: DELETE_CATEGORY_ACTION,
        category: {
            id,
        }
    }
}

export const editCategoryAction = (cat) => {
  return {
    type: EDIT_CATEGORY_ACTION,
    category: cat,
  }
} 