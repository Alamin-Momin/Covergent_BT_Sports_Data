import React from 'react'
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
                    <div class="game-box"><text> game 15</text> </div>
                    <div class="game-box"> <text> game 15</text></div> 
                    <div class="game-box"> <text> game 15</text></div> 
                    <div class="game-box"> <text> game 15</text></div> 
                    <div class="game-box"> <text> game 15</text></div> 
                    <div class="game-box"> <text> game 15</text></div>
                </div>
            </div>

        )
    }
}

export default Home;