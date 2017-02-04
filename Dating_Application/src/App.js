import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Slider extends Component {
    render(){
        return (
            <div className="outer_container container_slider jumbotron container-fluid">
                <div class ="slider_main">
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
          <h2>Head Shots</h2>
        </div>
        <p className="App-intro">
            <Slider>Test</Slider>
        </p>
      </div>
    );
  }
}

export default App;
