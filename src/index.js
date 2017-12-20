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
        this.state={list:[]};
    }
    componentWillMount()
    {
        let value = ['react js','node js','meteor js','express js','atmosphere js','smiley js','express js',
                    'angular2','angular js','npm','backbone js','plain javascript','JSX','es6'];
        this.setState({list:value});
    }

    render()
    {
        return(
            <Container className='container' >
            <Row>
                <Col sm="6">
                <List  list={this.state.list}/>
                </Col>
                <Col sm="6">
                <Video  list={this.state.list}/>
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
