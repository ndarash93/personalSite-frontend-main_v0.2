import React, { Component } from 'react';
import './about.css';
import Mission from './mission';
import Interests from './interests';
import Education from './education';
import Career from './career';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="about">
        <Mission />
        <Interests />
        <Education />
        <Career />
      </div>
    );
  }
}

export default About;