import React from 'react';
import PropTypes from 'prop-types';


export const FilterList = ({onFilterName, onFilterCategory, onClearFilters}) => {
    return(
        <div> 
            <p>Сортировать по имени:</p>
            <input onChange = {(event) => onFilterName(event.target.value)}/>
            <p>Сортировать по категории:</p>
            <select id = 'category' onChange = {(event) => onFilterCategory(event.target.value)}>
                <option selected disabled>Зона расстановки</option>
                <option>спальня</option>
                <option>столовая</option>
                <option>гостинная</option>
                <option>терасса</option>
                <option>-</option>
            </select>
            <button onClick = {() => onClearFilters(document.querySelector('#category').firstChild.selected)}>Clear</button>
        </div>
    )
}
FilterList.propTypes = {
    onFilterName: PropTypes.func,
    onFilterCategory: PropTypes.func,
    onClearFilters: PropTypes.func,
}