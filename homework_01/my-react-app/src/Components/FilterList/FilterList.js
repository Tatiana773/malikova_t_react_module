import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

export const FilterList = ({filterCategoryValue, filterNameValue, onFilterName, onFilterCategory, onClearAllFilters}) => {
    const onChangeName = useCallback((event) => {onFilterName(event.target.value)}, [onFilterName]);
    const onChangeCategory = useCallback((event) => {onFilterCategory(event.target.value)}, [onFilterCategory]);
    const onClearFilters = useCallback(() => {onClearAllFilters()},[onClearAllFilters]);
    return(
        <div> 
            <p>Сортировать по имени:</p>
            <input value = {filterNameValue} onChange = {onChangeName}/>
            <p>Сортировать по категории:</p>
            <select id = 'category' value = {filterCategoryValue} onChange = {onChangeCategory}>
                <option selected disabled>Зона расстановки</option>
                <option>спальня</option>
                <option>столовая</option>
                <option>гостинная</option>
                <option>терасса</option>
                <option>-</option>
            </select>
            <button onClick = {onClearFilters}>Clear</button>
        </div>
    )
}
FilterList.propTypes = {
    onFilterName: PropTypes.func,
    onFilterCategory: PropTypes.func,
    onClearAllFilters: PropTypes.func,
}