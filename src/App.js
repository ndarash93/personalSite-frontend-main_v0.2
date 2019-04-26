import React, { Component } from 'react';
import './utilities/css/all.min.css';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Main from './components/main/main';
import Footer from './components/footer/footer';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    document.title = 'Nick Darash | Coming Soon'
  }

  render() {
    return (
      <div className="root">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
