import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="footer">
                <div className="footer container">
                    <a href="https://www.linkedin.com/in/nicholas-darash-071b68128/"><i className="fab fa-linkedin icon"></i></a>
                    <a href="https://github.com/ndarash93"><i className="fab fa-github-square icon"></i></a>
                    <a href="https://twitter.com/search?q=ndarash"><i className="fab fa-twitter-square icon"></i></a>
                </div>
            </div>
        )
    }
}

export default Footer;