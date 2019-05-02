import React, { Component } from 'react';
import './utilities/css/all.min.css';
import Navbar from './components/navbar/navbar.js';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'renderedPage': <Home />
    };
  }

  componentDidMount(){
    document.title = 'Nick Darash | Coming Soon'
  }

  render() {
    return (
      <div className="root">
        <Navbar />
        <div className="content">
          {this.state.renderedPage}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
