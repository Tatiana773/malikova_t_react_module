import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class GoodsListButtons extends Component{
    static propTypes = {
        onAddClicked: PropTypes.func,
    }
    
    render(){
        return(
            <div>
               
                <button 
                    onClick={this.props.onAddClicked}>Add Item
                </button>
            </div>
        )
    }
}

