import React from 'react';
import '../scss/list.css';
import {  ListGroup,ListGroupItem} from 'reactstrap';
class UiList extends React.Component
{
    render()
    {
        return(
            <ListGroupItem key={this.props.index} >
            {this.props.listName}
            </ListGroupItem>
        );
    }
}
export class List extends React.Component{
    render()
    {
            return(
                    <ListGroup>
                    {
                        this.props.list.map(function(val,index){
                        return <UiList listName={val} index={index}/>;
                        })
                    }
                    
                    </ListGroup>
            );
    }
}
