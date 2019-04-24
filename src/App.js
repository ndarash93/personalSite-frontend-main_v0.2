import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.js';
import Main from './components/main/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
