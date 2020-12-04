import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'

class Home extends React.Component {

    render() {
        return (
            <div class="top-bar">
                <div class="logo-pic"></div>
                <div class="week-box">
                    <text> &larr; Week 15 &rarr;</text>
                </div>
                <div class="grid-container">
                    <Link to='/dashboard'>
                    <div class="game-box"><text> 54 - 51</text>
                        <div class="inside"><div class="column">
                        <img src={'../images/lar.png'} alt=''/>
                        <img src={'../images/chiefs.png'} alt=''/></div>LAR KAN</div>    </div>
                    </Link> 
                    <div class="game-box"><text> 7 - 48</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/eagles.png'} alt=''/>
                        <img src={'../images/saint.png'} alt=''/></div>PHI NO</div> </div>
                    <div class="game-box"><text> 25 - 20</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/viking.png'} alt=''/>
                        <img src={'../images/bears.png'} alt=''/></div>MIN CHI</div> </div>
                    <div class="game-box"><text> 23 - 22</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/broncos.png'} alt=''/>
                        <img src={'../images/lac.png'} alt=''/></div>DEN LAC</div> </div>
                    <div class="game-box"><text> 23 - 21</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/texans.png'} alt=''/>
                        <img src={'../images/washington.png'} alt=''/></div>HOU WAS</div> </div>
                    <div class="game-box"><text> 10 - 38</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/titans.png'} alt=''/>
                        <img src={'../images/colts.png'} alt=''/></div>TEN IND</div> </div>
                </div>
            </div>

        )
    }
}

export default Home;