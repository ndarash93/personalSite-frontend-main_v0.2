import React, { Component } from 'react';
import './main.css';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            'countdown': {
                'Days': null,
                'TensOfDays': null,
                'Hours': null,
                'TensOfHours': null,
                'Minutes': null,
                'TensOfMinutes': null,
                'Seconds': null,
                'TensOfSeconds': null
            }
        }
    }

    componentDidMount(){
        setInterval(() => {
            const estimatedDate = new Date("May 25, 2019 12:00:00").getTime();
            const now = new Date().getTime();
            const time = estimatedDate - now;
            const days = Math.floor(time/(1000*60*60*24));
            const hours = Math.floor((time % (1000*60*60*24)) / (1000*60*60));
            const minutes = Math.floor((time % (1000*60*60)) / (1000*60));
            const seconds = Math.floor((time % (1000*60)) / 1000);
            this.setState({
                countdown:{
                    'Days': days%10,
                    'TensOfDays': Math.floor(days/10),
                    'Hours': hours%10,
                    'TensOfHours': Math.floor(hours/10),
                    'Minutes': minutes%10,
                    'TensOfMinutes': Math.floor(minutes/10),
                    'Seconds': seconds%10,
                    'TensOfSeconds': Math.floor(seconds/10)
                }
            })
            //console.log(this.state);
        }, 1000);
    }

    render() {
        return(
            <div className="main">
                <div className="info">
                    <h1>Coming Soon</h1>
                    <p>
                        This site will represent me based on my resume, education, and personal projects.  Coming June, 2019!
                    </p>
                    <form action="#">
                        <input type="email" placeholder="Email"></input>
                        <input type="submit"></input>
                    </form>
                    <div className="countdown">
                        <div className="timer-module">
                            <div className="ten">{this.state.countdown.TensOfDays}</div>
                            <div className="one">{this.state.countdown.Days}</div>
                        </div>
                        <div className="timer-module">
                            <div className="ten">{this.state.countdown.TensOfHours}</div>
                            <div className="one">{this.state.countdown.Hours}</div>
                        </div>
                        <div className="timer-module">
                            <div className="ten">{this.state.countdown.TensOfMinutes}</div>
                            <div className="one">{this.state.countdown.Minutes}</div>
                        </div>
                        <div className="timer-module">
                            <div className="ten">{this.state.countdown.TensOfSeconds}</div>
                            <div className="one">{this.state.countdown.Seconds}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;