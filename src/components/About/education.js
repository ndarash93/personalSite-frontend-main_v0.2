import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <section className="education">
        <h2 className="title">-Education-</h2>
        <h3 className="subTitle">The University of Akron</h3>
        <img src="https://s3.us-east-2.amazonaws.com/nickdarash/Akron.jpg" alt="The University of Akron"></img>
        <h3 className="section-header">Degree</h3>
        <p className="content">Bacholer's of Science Electrical Engineering</p>
        <div className="divider"></div>
      </section>
    );
  }
}

export default Education;