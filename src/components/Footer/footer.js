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
        <h5 className="text">
          Propery of nickdarash.com
        </h5>
        <h6 className="text">
          Follow me: 
        </h6>
      </div>
    );
  }
}

export default Footer;