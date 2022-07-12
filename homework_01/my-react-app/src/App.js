import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from './Store/items/selector';
import { selectIsAddItemModalVisible} from './Store/App/selector';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { GoodsListButtons } from './Components/GoodsListButtons/GoodsListButtons';
import { AddItemModal } from './Components/AddItemModal/AddItemModal';
import {v4 as uuidv4} from 'uuid';
import { FilterList } from './Components/FilterList/FilterList';
import './App.css';


const App = () => {

  const dispatch = useDispatch();
  const state = useSelector(selectItems);

  const [isAddModalVisible, setIsAddModalVisible] = useState(selectIsAddItemModalVisible);
  const [goods, setGoods] = useState(state.goods);
  const [filteredGoods, setFilteredGoods] = useState(state.filteredGoods);
  const [editingItem, setEditingItem] = useState(null);
  const [filterNameValue, setFilterNameValue] = useState("");
  const [filterCategoryValue, setFilterCategoryValue] = useState("");

  const onAddItem = useCallback((name, color, type, category) =>{
    setIsAddModalVisible(false)
    setGoods([
    ...goods,
    {
      id: uuidv4(),
      name,
      color,
      type,
      category,
    }
   ])
  }, [setIsAddModalVisible, setGoods, goods])

  const onEditItem = useCallback((id) => {
    const item = goods.find((item) => item.id === id)
    setIsAddModalVisible(true)
    setEditingItem(item)
  }, [setEditingItem, setIsAddModalVisible, goods])
  
  const onApplyEditItem = useCallback((item) => {
    setIsAddModalVisible(false)
    setEditingItem(null)
    setGoods(goods.map((stateItem) => {
      if (stateItem.id === item.id){
        return item;
      }
      return stateItem;
    }))
  }, [setIsAddModalVisible, setEditingItem, setGoods, goods])

useEffect(() =>{
  if(filterNameValue.length || filterCategoryValue.length){
    let filteredItems = goods;
    if(filterNameValue.length){
      setFilteredGoods(filteredItems.filter((item) => item.name.toLowerCase().includes(filterNameValue.toLowerCase())))
    }
    if(filterCategoryValue.length){
      setFilteredGoods(filteredItems.filter((item) => item.category.toLowerCase().includes(filterCategoryValue.toLowerCase())))
    }
  }else{
    setFilteredGoods(null)
  }
}, [goods, filterNameValue, filterCategoryValue])

  const onFilterName = useCallback((value) =>{
    setFilterNameValue(value)
  }, [])

  const onFilterCategory = useCallback((value) =>{
    setFilterCategoryValue(value)
  }, [])

  const onClearSortFilters = useCallback(() => {
    setFilteredGoods(null)
    setFilterNameValue("")
    setFilterCategoryValue("")       
  }, [setFilteredGoods, setFilterNameValue, setFilterCategoryValue])
  
  const onAddModalClicked = useCallback(() => {setIsAddModalVisible(true)}, [setIsAddModalVisible])
  
  
  return ( 
   
      <div className = 'app'>
        <GoodsList 
        goods = {filteredGoods || goods}
        onEditItem = {onEditItem}/>
        <GoodsListButtons onAddClicked = {onAddModalClicked}/>
        {isAddModalVisible? 
          <AddItemModal 
          onAddItemClick = {onAddItem}
          onEditItemClick = {onApplyEditItem}
          item = {editingItem}
          goods = {goods}/>
          : null}
        <FilterList 
        filterCategoryValue = {filterCategoryValue}
        filterValue={filterNameValue}
        onFilterName = {onFilterName}
        onFilterCategory = {onFilterCategory}
        onClearAllFilters = {onClearSortFilters}/>
      </div>
 
  )      
}

export default App;