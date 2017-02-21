

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Input from './compnents/input';
import Button from './compnents/button';
import PageContainer from './compnents/page_container';



class Slider extends Component {
    render(){
        return (
            <div className="outer_container container_slider jumbotron container-fluid">
                <div className ="slider_main">
                    This is the mian slider
                </div>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (

      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is the main tagline</h1>
          <h2>bad</h2>

        <div className="row top-button-row">
          <button className="col-sm-3 col-sm-push-3">Photographer login</button>
          <button className="col-sm-3 col-sm-push-3">Customer Login</button>

       <div className="row bottom-button-row">
         <button className="col-sm-4 col-sm-push-4">Test Button</button>
     </div>
        </div>

     </div>
    );
  }
}

export default App;
