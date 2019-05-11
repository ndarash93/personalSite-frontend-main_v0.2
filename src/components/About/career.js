import React, { Component } from 'react';

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <section className="career">
        <h2 className="title">-Career-</h2>
        <img src="https://s3.us-east-2.amazonaws.com/nickdarash/thumbnailimage.img.jpg" alt="Burns&McDonnell" />
      </section>
    );
  }
}

export default Career;