import React, { useCallback, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems, selectStateItems } from '../../Store/items/selector';
import PropTypes from 'prop-types';

export const FilterList = () => {

    const goods = useSelector(selectItems);
    const state = useSelector(selectStateItems);
    console.log("goods in filter:", goods);
    console.log("state in filter:", state.filteredGoods);

    const [filteredGoods, setFilteredGoods] = useState(state.filteredGoods);
    console.log("filteredGoods", filteredGoods)
    
    const dispatch = useDispatch();

    const [filterNameValue, setFilterName] = useState("");
    const [filterCategoryValue, setFilterCategory] = useState("");

    const onChangeName = useCallback((event) => {setFilterName(event.target.value)}, [setFilterName]);
    const onChangeCategory = useCallback((event) => {setFilterCategory(event.target.value)}, [setFilterCategory]);

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
        }, [goods, filterNameValue, filterCategoryValue, dispatch])
        
  const onClearAllFilters = useCallback(() => {
    setFilteredGoods(null)
    setFilterName("")
    setFilterCategory("")       
  }, [setFilteredGoods, ])
    return(
        <div> 
            <p>Сортувати за назвою:</p>
            <input value = {filterNameValue} onChange = {onChangeName}/>
            <p>Сортувати за категорією:</p>
            <select id = 'category' value = {filterCategoryValue} onChange = {onChangeCategory}>
                <option selected disabled>Розміщення</option>
                <option>спальня</option>
                <option>ідальня</option>
                <option>вітальня</option>
                <option>терасса</option>
                <option>-</option>
            </select>
            <button 
            onClick = {onClearAllFilters}>Clear</button>
        </div>
    )
}
FilterList.propTypes = {
    onFilterName: PropTypes.func,
    onFilterCategory: PropTypes.func,
    onClearAllFilters: PropTypes.func,
}