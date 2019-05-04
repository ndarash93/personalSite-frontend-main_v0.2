import React, { Component } from 'react';

class Summary extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div className="summary">
        <h1>Who Am I?</h1>
        <p>
        I am an Electrical Engineer with an interest in all things Electronic, be it web development, 
        circuit design, or software.  Most importantly I am here to learn.
        </p>
        <div className="divider"></div>
      </div>
    );
  }
}

export default Summary;