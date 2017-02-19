

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
                    Increasing your mate value in the 21st century.
                </div>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (

      <div>

       <div className="row bottom-button-row">
         <button className="col-sm-4 col-sm-push-4">Test Button</button>
         <button className="col-sm-4 col-sm-push-4">Test Button</button>
     </div>
        </div>

     </div>
    );
  }
}

export default App;
