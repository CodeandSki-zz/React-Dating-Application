import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Slider extends Component {
    render(){
        return (
            <div className="outer_container container_slider jumbotron container-fluid">
                <div class ="slider_main">


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
          <h2>Changing </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
