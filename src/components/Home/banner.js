import React, { Component } from 'react';

class Banner extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div className="banner">
        <div className="cover"></div>
        <h1 className="title">Nick Darash</h1>
        <h2 className="subTitle">Personal Site</h2>
      </div>
    );
  }
}

export default Banner;