import React, { Component } from 'react';

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <section className="interests">
        <h2 className="title">-Interests-</h2>
        <h3 className="subTitle">Electronics</h3>

        <div className="divider"></div>
      </section>
    );
  }
}

export default Interests;