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
                    <div class="game-box"><text> 35 - 17</text><div class="inside"> HOU BAL</div> </div>
                    <div class="game-box"><text> 35 - 17</text><div class="inside"> HOU BAL</div> </div>
                    <div class="game-box"><text> 35 - 17</text><div class="inside"> HOU BAL</div> </div>
                    <div class="game-box"><text> 35 - 17</text><div class="inside"> HOU BAL</div> </div>
                    <div class="game-box"><text> 35 - 17</text><div class="inside"> HOU BAL</div> </div>
                    <div class="game-box"><text> 35 - 17</text><div class="inside"> HOU BAL</div> </div>
                </div>
            </div>

        )
    }
}

export default Home;