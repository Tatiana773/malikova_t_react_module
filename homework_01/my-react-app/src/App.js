import React, { useState, useCallback } from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import { GoodsListButtons } from './GoodsListButtons/GoodsListButtons';
import { AddItemModal } from './AddItemModal/AddItemModal';
import {v4 as uuidv4} from 'uuid';
import { FilterList } from './FilterList/FilterList';
import './App.css';

const state = {
  isAddModalVisible: false,
  isFiltered:false,
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
  const [isFiltered, setIsFiltered] = useState(state.isFiltered);
  const [goods, setGoods] = useState(state.goods);
  const [filteredGoods, setFilteredGoods] = useState(state.filteredGoods);
  const [editingItem, setEditingItem] = useState(null);

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
   setFilteredGoods(isFiltered? 
    [...filteredGoods,
    {
      id: uuidv4(),
      name,
      color,
      type,
      category,
    },
    ]: null)
  }, [setIsAddModalVisible, setGoods, goods, filteredGoods, setFilteredGoods, isFiltered])

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
     setFilteredGoods(isFiltered? filteredGoods.map((stateItem) => {
      if (stateItem.id === item.id){
        return item;
      }
      return stateItem;
    }): null)
  }, [setIsAddModalVisible, setEditingItem, setGoods, isFiltered, filteredGoods, goods])

  const onFilterName = useCallback((value) =>{
    if(value && value !== '-'){
      setIsFiltered(true)
      setFilteredGoods([...goods].filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }else if(value && value === '-'){
        setIsFiltered(true)
        setFilteredGoods([...goods].filter((item) => item.name ===''))
    }else{
        setIsFiltered(false)
  }}, [setIsFiltered, setFilteredGoods, goods])

  const onFilterCategory = useCallback((value) =>{
    if(value && value !== '-'){
      setIsFiltered(true)
      setFilteredGoods([...goods].filter((item) => item.category.toLowerCase().includes(value.toLowerCase())))
    }else if(value && value === '-'){
      setIsFiltered(true)
      setFilteredGoods([...goods].filter((item) => item.category === ''))
    }else{
        setIsFiltered(false)
  }}, [setIsFiltered, setFilteredGoods, goods])

  const onClearSortFilters = useCallback(() => {
      setIsFiltered(false)        
  }, [setIsFiltered])
  
  const onDeleteItem = useCallback((id) => {
    setGoods(goods.filter((item) => item.id !== id))
    setFilteredGoods(isFiltered?filteredGoods.filter((item) => item.id !== id):null)
  }, [setGoods, setFilteredGoods, filteredGoods, goods, isFiltered])

  const onModalClose = useCallback(() => {
    setIsAddModalVisible(false)
    setEditingItem(null)
  }, [setIsAddModalVisible, setEditingItem])

  const onAddModalClicked = useCallback(() => {setIsAddModalVisible(true)}, [setIsAddModalVisible])
     
  return ( 
    <div className = 'app'>
      <GoodsList 
      goods = {isFiltered? filteredGoods : goods}
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
      onFilterName = {onFilterName}
      onFilterCategory = {onFilterCategory}
      onClearFilters = {onClearSortFilters}/>
    </div>
  )      
}

export default App;