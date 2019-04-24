import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        'Test':'Test'
      }
    }

    render() {
      return (
        <nav className="navbar">
            <div className="banner"><p>Nick Darash</p></div>
        </nav>
      );
    }
  }

  export default Navbar;