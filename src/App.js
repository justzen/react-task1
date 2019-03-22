import React, { Component } from 'react';
import reactDOM from "react-dom";
import './App.css';

class App extends Component {

    state = {
      text: "Hi! My name is Zhen"
    };

  clicked() {
    console.log()
    this.setState({ text: this.refs.textBox.value })
  }
  render() {
    return (
    <div>
      { this.state.text}
      <input ref="textBox" type="text" />
      <button onClick = { () => { this.clicked(); }}> Submit </button>
    </div> )
  }
}

export default App;
