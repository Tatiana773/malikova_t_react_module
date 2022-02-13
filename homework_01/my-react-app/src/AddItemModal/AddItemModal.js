import React, {Component} from 'react';
import './AddItemModal.css';
import PropTypes from 'prop-types';

export class AddItemModal extends Component{
    static propTypes = {
        onAddItemClick: PropTypes.func,
        onEditItemClick: PropTypes.func,
        onCloseAddItemModalClick: PropTypes.func,
    }
    constructor(props){
        super(props);
        this.state = {
            color: this.props.item?.color || '',
            name: this.props.item?.name || '',
            type: this.props.item?.type || '',

        }
    }
    render(){
        return(
            <div className = "modalForm">
                <form onSubmit = {() => {
                    this.props.item?.id ? 
                    this.props.onEditItemClick({...this.state, id: this.props.item.id}) :
                    this.props.onAddItemClick(this.state)}}>
                    <p>Name:</p>
                    <input value = {this.state.name} onChange = {(event) => {this.setState({name: event.target.value})}}/>
                    <p>Color:</p>
                    <input value = {this.state.color} onChange = {(event) => {this.setState({color: event.target.value})}}/>
                    <p>Type:</p>
                    <input value = {this.state.type} onChange = {(event) => {this.setState({type: event.target.value})}}/>
                    <p>Category:</p>
                    <select value = {this.state.category} onChange={(event) => {this.setState({category: event.target.value})}}>
                        <option selected disabled>Зона расстановки</option>
                        <option>спальня</option>
                        <option>столовая</option>
                        <option>гостинная</option>
                        <option>терасса</option>
                    </select>
                    <button>{this.props.item?.id? 'Edit': 'Add'}</button>
                    <button onClick = {this.props.onCloseAddItemModalClick}>Close</button>
                </form>
            </div>
        )
    }
}