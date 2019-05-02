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
          'Contact'
        ],
        'menuClassList': 'nav-menu-list-closed',
        'activePage': 0
      }
    }

    handleClick = () => {
      if(this.state.menuClassList === 'nav-menu-list-closed'){
        this.setState({menuClassList: 'nav-menu-list-open'});
      }else{
        this.setState({menuClassList: 'nav-menu-list-closed'});
      }
    }

    handleActivePage = (target) => {
      this.setState({activePage: target})
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
                  if(this.state.activePage === i){
                    return(
                    <li className="nav-list-item active" onClick={_ => this.handleActivePage(i)} key={i}>{page}</li>
                    );
                  }else{
                    return(
                      <li className="nav-list-item" onClick={ _ => this.handleActivePage(i)} key={i}>{page}</li>
                    );
                  }
                })
              }
              </ul>
            </div>
        </nav>
      );
    }
  }

  export default Navbar;