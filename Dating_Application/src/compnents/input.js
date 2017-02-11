import React, { Component } from 'react';

class Input extends Component {

    buttonClick() {
        alert('Proof of concept');
    }

  render() {
      return (
      <input className="std-input" onClick={this.buttonClick()}>Text goes here</input>
    );
  }
}

export default Input;
