

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Input from './compnents/input';
import Button from './compnents/button';



class Slider extends Component {
    render(){
        return (
            <div className="outer_container container_slider jumbotron container-fluid">
                <div className ="slider_main">
                    Increasing your mate value in the 21st century.
                </div>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is the main tagline</h1>
          <h2>bad</h2>
          <button>Test Button</button>
        </div>
        <p className="App-intro">

            {/* <Counter increment={1}></Counter> */}
        </p>
      </div>
    );
  }
}

export default App;
