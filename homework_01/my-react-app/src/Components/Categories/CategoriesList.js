import React, { useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectCategoriesArray } from '../../Store/Categories/selector';
import { selectItems } from '../../Store/items/selector';
import { editCategoryAction, deleteCategoryAction } from '../../Store/Categories/action';
import { CategoryItem} from './CategoryItem';


export const CategoriesList = () => {
  const categories = useSelector(selectCategoriesArray);
  const categoriesList = categories.filter((cat)=> cat !== null);
  const goods = useSelector(selectItems);
  const dispatch = useDispatch();


  const onSaveCategory = useCallback((category) => {
    dispatch(editCategoryAction(category));
  }, [dispatch])

  const onDeleteCat = useCallback((id)=>{
    const usedCategory = goods.find((item) => item.categoryId === id);
    if(!usedCategory){
       dispatch(deleteCategoryAction({id}))
    }else{
      return categoriesList
    }
  },[dispatch, categoriesList, goods]);
      

  return (
    <table>
      <tbody>
        {categoriesList.map((cat) => {
          return (
            <CategoryItem key={cat.id} cat={cat} onSave={onSaveCategory} onDelete={onDeleteCat}/>
          )
        })}
      </tbody>
      
    </table>
  )
} 