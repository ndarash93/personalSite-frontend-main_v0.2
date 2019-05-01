import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        'pages': [
          'Home',
          'About',
          'Skills',
          'Projects',
          'Blog',
          'Contact'
        ],
        'menuClassList': 'nav-menu-list-closed'
      }
    }

    handleClick = () => {
      if(this.state.menuClassList === 'nav-menu-list-closed'){
        this.setState({menuClassList: 'nav-menu-list-open'});
      }else{
        this.setState({menuClassList: 'nav-menu-list-closed'});
      }
    }

    render() {
      return (
        <nav className="navbar">
            <div className="banner">Nick Darash</div>
            <div className="nav-menu" onClick={this.handleClick}>
            <div className="nav-menu-bar"></div>
              <ul className={this.state.menuClassList}>
              {
                this.state.pages.map((page, i) => {
                  return(
                  <li className="nav-list-item" key={i}>{page}</li>
                  );
                })
              }
              </ul>
            </div>
        </nav>
      );
    }
  }

  export default Navbar;