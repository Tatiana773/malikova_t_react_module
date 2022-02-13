import React, {Component} from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';

export class GoodsList extends Component{
    render(){
        return(
        <table>
            <tbody>
                {this.props.goods.map((item, i) => {
                    return (
                    <GoodsItem
                        key={item.id}
                        item={item} 
                        onDelete = {() => this.props.onDeleteItem(item.id)}
                        onEdit = {() => this.props.onEditItem(item.id)}
                    />
                    )
                })}
            </tbody>
        </table>
        )
    }
}

