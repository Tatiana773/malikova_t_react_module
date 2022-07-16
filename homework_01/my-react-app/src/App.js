import React, { useState, useCallback, useEffect } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from './Store/items/selector';
import { selectIsAddItemModalVisible } from './Store/App/selector';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { GoodsListButtons } from './Components/GoodsListButtons/GoodsListButtons';
import { AddItemModal } from './Components/AddItemModal/AddItemModal';
import {v4 as uuidv4} from 'uuid';
import { FilterList } from './Components/FilterList/FilterList';
import './App.css';


const App = () => {

  const dispatch = useDispatch();

  const state = useSelector(selectItems);
  const isAddModalVisible = useSelector(selectIsAddItemModalVisible);

  return ( 
      <div className = 'app'>
        <GoodsList 
        // goods = {filteredGoods || goods}
        />
        <GoodsListButtons />
        {isAddModalVisible? <AddItemModal/> : null}
        <FilterList />
      </div>
  )      
}

export default App;