import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GoodsList } from './Components/GoodsList/GoodsList';
import { AddItemModal } from './Components/AddItemModal/AddItemModal';
import { AddCategory } from './Components/Categories/AddCategory';
import { CategoriesList } from './Components/Categories/CategoriesList';
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
        <Link style={styles.linkItem} to="/category">Category</Link>
        <Link style={styles.linkItem} to="/addcategory">Add Category</Link>
      </nav>

        <Routes>
          <Route path='/' element={<GoodsList/>}/>
          <Route path='/add' element={<AddItemModal/>}/>
          <Route path="/items/:titleFilt" element ={<GoodsList/>}/>
          <Route path="/items/:categoryFilt" element ={<GoodsList/>}/>
          <Route path="/category" element={<CategoriesList />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  )      
}

export default App;