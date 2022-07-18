import React, { useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectCategoriesArray } from '../../Store/Categories/selector';
import { selectItems } from '../../Store/items/selector';
import { editCategoryAction, deleteCategoryAction } from '../../Store/Categories/action';
import { CategoryItem} from './CategoryItem';


export const CategoriesList = () => {
  const categories = useSelector(selectCategoriesArray);
  const goods = useSelector(selectItems);
  const dispatch = useDispatch();

  const onSaveCategory = useCallback((category) => {
    dispatch(editCategoryAction(category));
  }, [dispatch])

  const onDeleteCat = useCallback ((id)=>{
      if(goods.categoryId !==id){
          dispatch(deleteCategoryAction({id}))
      }else{
          return categories
      }},[dispatch, categories, goods.categoryId]);
      

  return (
    <table>
      <tbody>
        {categories.map((cat) => {
          return (
            <CategoryItem key={cat.id} cat={cat} onSave={onSaveCategory} onDelete={onDeleteCat}/>
          )
        })}
      </tbody>
      
    </table>
  )
} 