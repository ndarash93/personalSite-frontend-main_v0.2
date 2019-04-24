import React, { Component } from 'react';
import './main.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            'Test': 'test'
        }
    }

    render() {
        return(
            <div className="main">
                <div className="info">
                    <h1>Coming Soon</h1>
                    <p>
                        This site in the future will allow me to display projects, tinker around with,
                        learn and associate with my accomplishments.
                    </p>
                    <form action="#">
                        <input type="email" value="" placeholder="Email"></input>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main;