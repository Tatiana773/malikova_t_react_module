
import React, { useState, useCallback } from 'react';

export const CategoryItem = ({ cat, onSave = () => {}, onDelete =()=>{} }) => {
  const [categoryName, setCategoryName] = useState(cat.name);

  const onCategoryNameChange = useCallback((event) => {
    setCategoryName(event.target.value)
  }, [setCategoryName])

  const onSaveClicked = useCallback(() => {
    onSave({
      ...cat,
      name: categoryName,
    })
  }, [onSave, cat, categoryName])
  const onDeleteClicked = useCallback(() => {
    onDelete(cat.id)
  }, [cat.id, onDelete])

  return (
    <tr>
      <td>{cat.id}</td>
      <td><input value={categoryName} onChange={onCategoryNameChange}/></td>
      <td><button onClick={onSaveClicked}>Save</button></td>
      <td><button onClick={onDeleteClicked}>Delete</button></td>
    </tr>
  )
} 