import React, { Component } from 'react'

export default class TestComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            class : 'test class'
        }
        console.log("-".repeat(10));
        console.log('constructor called');
        console.log('props : ', props);
        console.log("-".repeat(10));
    }
    static getDerivedStateFromProps(props, state){
        console.log("-".repeat(10));
        console.log('getDerivedStateFromProps called');
        console.log('props : ', props);
        console.log('state : ', state);
        console.log("-".repeat(10));
        return state;
    }
    componentDidMount(){
        console.log("-".repeat(10));
        console.log('componentDidMount called');
        console.log("-".repeat(10));
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("-".repeat(10));
        console.log('shouldComponentUpdate called');
        console.log('next props : ', nextProps);
        console.log('next state : ', nextState);
        console.log('should return true or false');
        console.log("-".repeat(10));
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("-".repeat(10));
        console.log('getSnapshotBeforeUpdate called');
        console.log('prev props : ', prevProps);
        console.log('prev state : ', prevState);
        console.log('should return anything which will pass to componentDidUpdate');
        console.log("-".repeat(10));
        return 'snapshot';
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("-".repeat(10));
        console.log('componentDidUpdate called');
        console.log('prev props : ', prevProps);
        console.log('prev state : ', prevState);
        console.log('prev snapshot : ', snapshot);
        console.log("-".repeat(10));
    }
    componentWillUnmount(){
        console.log("-".repeat(10));
        console.log('componentWillUnmount called');
        console.log("-".repeat(10));
    }
    render() {
        console.log("-".repeat(10));
        console.log('render is called');
        console.log("-".repeat(10));
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        )
    }
}
