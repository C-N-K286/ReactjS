import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {List} from './js/list';
import { Container,Row,Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Video} from './js/video';
class Vplayer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={list:[],index:0};
        this.onVideoClick = this.onVideoClick.bind(this);
    }
    onVideoClick(indi)
    {
        this.setState({index:indi});
        console.log(this.state.index);
    }
    componentWillMount()
    {
        let value = ['sun raha','thunder','cheez badi mast','baitiki vachi','bellgeddu','sanam re','jimmiki kemmel',
                    ];
        this.setState({list:value});
    }

    render()
    {
        return(
            <Container className='container' >
            <Row>
                <Col sm="3">
                <List  list={this.state.list}  onClick={this.onVideoClick} />
                </Col>
                <Col sm="9">
                <Video  list={this.state.list} index={this.state.index}/>
                </Col>
            </Row>
            </Container>
        );
    }
}
ReactDom.render(
    <Vplayer/>,
    document.getElementById('root')
);
