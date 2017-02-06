import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {Component} from 'react'

class Counter extends Component {

    state = {
        count: 1
    };

    increment() {
        this.setState({
            count: this.state.count + this.props.increment
        });
    }

    render() {
        return  (
            <div>
            <h1> This is the number of active users counter </h1>
            <button onClick={this.increment.bind(this)}>{this.state.count}</button>
        </div>
        )
    }



}

export default Counter;
