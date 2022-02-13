import React, { Component } from 'react';
import { GoodsList } from './GoodsList/GoodsList';
import { GoodsListButtons } from './GoodsListButtons/GoodsListButtons';
import { AddItemModal } from './AddItemModal/AddItemModal';
import {v4 as uuidv4} from 'uuid';
import { FilterList } from './FilterList/FilterList';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.onAddItem = ({name, color, type, category}) =>{
          this.setState({
            isAddModalVisible: false,
            goods:[
            ...this.state.goods,
            {
              id: uuidv4(),
              name,
              color,
              type,
              category,
            }
          ]
        })
        }
        this.onEditItem = (id) => {
          const item = this.state.goods.find((item) => item.id === id)
          this.setState({
            isAddModalVisible: true,
            editingItem: item,
          })
        }
        this.onApplyEditItem = (item) => {
          this.setState({
            isAddModalVisible: false,
            editingItem: null,
            goods: this.state.goods.map((stateItem) => {
              if (stateItem.id === item.id){
                return item;
              }
              return stateItem;
            })
          })
          
        }
        this.onFilterName = (value) =>{
          if(value){
           this.setState({
            isFiltered: true,
            filteredGoods: [...this.state.goods].filter((item) => item.name.toLowerCase().includes(value.toLowerCase())
          )}
        )
        }else{
          this.setState({
            ...this.state.goods,
          })
        }
        }
        this.onFilterCategory = (value) =>{
          if(value){
            this.setState({
              isFiltered: true,
             filteredGoods: [...this.state.goods].filter((item) => item.category.toLowerCase().includes(value.toLowerCase())
           )}
         )
         }else{
           this.setState({
             ...this.state.goods,
           })
         }
        }
        this.onDeleteItem = (id) => {
          this.setState({
            goods: this.state.goods.filter((item) => item.id !== id)
          })
        }
        this.onModalClose = () => {
          this.setState({
            isAddModalVisible: false,
            editingItem: null,
          })
        }
        this.state = {
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
        }
    render() {
            return ( 
                <div className = 'app'>
                  <GoodsList 
                  goods = {this.state.isFiltered? this.state.filteredGoods : this.state.goods}
                  onDeleteItem = {this.onDeleteItem}
                  onEditItem = {this.onEditItem}/>
                  <GoodsListButtons onAddClicked = {() =>this.setState({isAddModalVisible: true})}/>
                  {this.state.isAddModalVisible? 
                  <AddItemModal 
                  onAddItemClick = {this.onAddItem}
                  onCloseAddItemModalClick = {this.onModalClose}
                  onEditItemClick = {this.onApplyEditItem}
                  item = {this.state.editingItem}/>
                  : null}
                  <FilterList 
                  onFilterName = {this.onFilterName}
                  onFilterCategory = {this.onFilterCategory}/>
                </div>
        )     
    }
}

export default App;