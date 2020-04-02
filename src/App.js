import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import ListProps from './components/ListProps'
import StateLessComponent from './components/StateLessComponent'
import ConditionalComponent from './components/ConditionalComponent'


class App extends Component {
  state = {
    listData : [
      {name: 'John', age: 25},
      {name: 'Curter', age: 35},
      {name: 'Mr. A', age: 15},
      {name: 'MR. B', age: 35},
    ]
  }
  render() {
    return (
      <div className="App">
        <Welcome />
        {/* <Hello name="Hore" age="20" /> */}
        {/* <ListProps listData={this.state.listData} /> */}
        {/* <StateLessComponent listData={this.state.listData} /> */}
        <ConditionalComponent listData={this.state.listData} />
      </div>
    );
  }
}


export default App;
