import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { AddItemModal } from './Components/AddItemModal/AddItemModal';
import { FilterList } from './Components/FilterList/FilterList';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import './App.css';

const styles = {
  nav: {
    borderBottom: "solid 1px",
    paddingBottom: "1rem"
  },
  linkItem: {
    padding: "10px" ,
    fontSize: "22px",
    textDecoration: "none",
  }
}


const App = () => {

  return ( 
    
      <div className = 'app'>
        <nav style={styles.nav}>

        <Link style={styles.linkItem} to="/">List</Link>
        <Link style={styles.linkItem} to="/add">Add Item</Link>
        <Link style={styles.linkItem} to="/filter">Find Item</Link>
      </nav>

        {/* <GoodsListButtons /> */}
        <Routes>
          <Route path='/' element={<GoodsList 
          // goods = {filteredGoods || goods}
          />}/>
          <Route path='/add' element={<AddItemModal/>}/>
          <Route path='/filter' element={<FilterList />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  )      
}

export default App;