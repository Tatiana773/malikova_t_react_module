import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class FilterList extends Component{
    static propTypes = {
        onFilterMame: PropTypes.func,
        onFilterCategory: PropTypes.func,
    }
    constructor(props){
        super(props);
        this.state = {
            name: this.props.item?.name || '',
            type: this.props.item?.category || '',

        }
    }
    render(){
        return(
            <div> 
            <p>Сортировать по имени:</p>
            <input onChange = {(event) => {this.props.onFilterName(event.target.value)}}/>
            <p>Сортировать по категории:</p>
            <select onChange = {(event) => {this.props.onFilterCategory(event.target.value)}}>
                    <option disabled>Зона расстановки</option>
                    <option>спальня</option>
                    <option>столовая</option>
                    <option>гостинная</option>
                    <option>терасса</option>
            </select>
            </div>
        )
    }
}