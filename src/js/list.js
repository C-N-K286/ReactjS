import React from 'react';
import '../scss/list.css';
import {  ListGroup} from 'reactstrap';
import {UiList} from './UiList';
export class List extends React.Component{
    constructor(props){
        super(props);
        this.videoClick = this.videoClick.bind(this);
    }

    videoClick(val)
    {
            //console.log(val);
            this.props.onClick(val);
    }
    
    render()
    {
            return(
                    <ListGroup>
                    {
                        this.props.list.map(function(val,index){
                        return <UiList listName={val} index={index} oNClick = {this.videoClick}/>;
                        },this)
                    }
                    
                    </ListGroup>
            );
    }
}
