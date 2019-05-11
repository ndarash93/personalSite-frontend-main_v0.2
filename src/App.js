import React, { Component } from 'react';
import './utilities/css/all.min.css';
import Navbar from './components/navbar/navbar.js';
import Home from './components/Home/home';
import About from './components/About/about';
import Footer from './components/Footer/footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'pages': [
        {
          'pageObject': <Home />,
          'pageTitle': 'Home'
        },
        {
          'pageObject': <About />,
          'pageTitle': 'About'
        }
      ],
      activePage: 1
    };
  }

  componentDidMount(){
    document.title = 'Nick Darash | ' + this.state.pages[this.state.activePage].pageTitle;
  }

  handleActivePage = (target) => {
    this.setState({activePage: target})
    document.title = 'Nick Darash | ' + this.state.pages[target].pageTitle;
  }


  render() {
    return (
      <div className="root">
        <Navbar 
          activePage={this.state.activePage} 
          handleActivePage={this.handleActivePage} 
          pages={this.state.pages}
        />
        <div className="content">
          {this.state.pages[this.state.activePage].pageObject}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
