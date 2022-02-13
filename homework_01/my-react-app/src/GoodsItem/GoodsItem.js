import React, {Component} from 'react';

export class GoodsItem extends Component{
    render(){
        return(
        <tr>
            <td>{this.props.item?.name || " - "}</td>
            <td>{this.props.item?.color || " - "}</td>
            <td>{this.props.item?.type || " - "}</td>
            <td>{this.props.item?.category || " - "}</td>
            <td>
                <button onClick={this.props.onDelete}>Delete</button>
            </td>
            <td>
                <button onClick={this.props.onEdit}>Edit</button>
            </td>
        </tr>
        )
    }
}