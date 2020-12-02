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
                    <Link to='/details'>
                    <div class="game-box"><text> 35 - 17</text>
                        <div class="inside"><div class="column">
                        <img src={'../images/baltimore-ravens.png'} alt=''/>
                        <img src={'../images/seattle-seahawks.png'} alt=''/></div>BAL SEA</div>    </div>
                    </Link> 
                    <div class="game-box"><text> 35 - 17</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/dallas-cowboys.png'} alt=''/>
                        <img src={'../images/chiefs.png'} alt=''/></div>DAL KAN</div> </div>
                    <div class="game-box"><text> 35 - 17</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/texans.png'} alt=''/>
                        <img src={'../images/nep.png'} alt=''/></div>HOU NEP</div> </div>
                    <div class="game-box"><text> 35 - 17</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/baltimore-ravens.png'} alt=''/>
                        <img src={'../images/seattle-seahawks.png'} alt=''/></div>BAL HOU</div> </div>
                    <div class="game-box"><text> 35 - 17</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/baltimore-ravens.png'} alt=''/>
                        <img src={'../images/seattle-seahawks.png'} alt=''/></div>BAL HOU</div> </div>
                    <div class="game-box"><text> 35 - 17</text>
                    <div class="inside"><div class="column">
                        <img src={'../images/baltimore-ravens.png'} alt=''/>
                        <img src={'../images/seattle-seahawks.png'} alt=''/></div>BAL HOU</div> </div>
                </div>
            </div>

        )
    }
}

export default Home;