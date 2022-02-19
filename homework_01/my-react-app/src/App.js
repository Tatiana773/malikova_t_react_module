import React, { useState, useCallback, useEffect } from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import { GoodsListButtons } from './GoodsListButtons/GoodsListButtons';
import { AddItemModal } from './AddItemModal/AddItemModal';
import {v4 as uuidv4} from 'uuid';
import { FilterList } from './FilterList/FilterList';
import './App.css';

const state = {
  isAddModalVisible: false,
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

const App = () => {

  const [isAddModalVisible, setIsAddModalVisible] = useState(state.isAddModalVisible);
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
  
  const onDeleteItem = useCallback((id) => {
    setGoods(goods.filter((item) => item.id !== id))
  }, [setGoods, goods])

  const onModalClose = useCallback(() => {
    setIsAddModalVisible(false)
    setEditingItem(null)
  }, [setIsAddModalVisible, setEditingItem])

  const onAddModalClicked = useCallback(() => {setIsAddModalVisible(true)}, [setIsAddModalVisible])
     
  return ( 
    <div className = 'app'>
      <GoodsList 
      goods = {filteredGoods || goods}
      onDeleteItem = {onDeleteItem}
      onEditItem = {onEditItem}/>
      <GoodsListButtons onAddClicked = {onAddModalClicked}/>
      {isAddModalVisible? 
        <AddItemModal 
        onAddItemClick = {onAddItem}
        onCloseAddItemModalClick = {onModalClose}
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