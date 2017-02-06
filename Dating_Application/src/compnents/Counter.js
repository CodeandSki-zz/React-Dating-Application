import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {Component} from 'react'

class Counter extends Component {

    state = {
        count: 0
    };

    render() {
        return <button onClick={this.increment.bind(this)}>{this.state.count}</button>
    }

    increment() {
        this.setState({count: this.state.count + this.props.increment});
    }

}

export default Counter;
