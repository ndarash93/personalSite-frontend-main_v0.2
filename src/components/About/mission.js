import React, { Component } from 'react';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <section className="mission">
        <h2 className="head">ABOUT ME</h2>
        <h2 className="title">-Mission-</h2>
        <h3 className="subTitle">Motivations</h3>
        <p>
          My effort is to gain as much knowledge as possible about several different subjects.
          These include circuit design, simulation, and testing as well as several software skills, such as
          front end and back end web development, embedded progrraming, and others.  
        </p>
        <div className="divider"></div>
      </section>
    );
  }
}

export default Mission;