import React, { Component } from 'react';
import './home.css';
import Banner from './banner';
import Summary from './summary';
import Main from './main';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    return(
      <div className="home">
        <Banner />
        <Summary />
        <Main />
      </div>
    );
  }
}

export default Home;