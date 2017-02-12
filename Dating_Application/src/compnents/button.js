import React, { Component } from 'react';

class Button extends Component {

    buttonClick() {
        console.log('Button Works');
    }

  render() {



    return (
        <button className="btn btn-main" onClick={this.buttonClick()}></button>
    );
  }
}

export default Button;
