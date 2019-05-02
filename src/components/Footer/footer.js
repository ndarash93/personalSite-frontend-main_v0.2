import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div className="footer">
        <i className="fab fa-github-square github"></i>
        <i className="fab fa-twitter-square twitter"></i>
        <i className="fab fa-linkedin linkedin"></i>
      </div>
    );
  }
}

export default Footer;