import React from 'react';
import { ListGroupItem} from 'reactstrap';
export class UiList extends React.Component
{
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        
    }
    onClickHandler(e)
    {
        var index = this.props.index;
        //console.log(index);
        this.props.oNClick(index);

    }
    render()
    {
        return(
            <ListGroupItem key={this.props.index}  onClick={this.onClickHandler} value={this.props.index}>
            {this.props.listName}
            </ListGroupItem>
        );
    }
}