import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div class="top-bar">
        <div class="logo-pic" />
        <div class="account">
          <p>
            Username <span>Affiliation</span>
          </p>
          <img class="profile-pic" src={"../images/Profile-Icon.png"} alt="" />
        </div>
        <div class="week-box">
          <text> &larr; Week 15 &rarr;</text>
          <p>2018-19 season</p>
        </div>
        <div class="grid-container">
          <Link to="/dashboard">
            <div class="game-box">
              <div class="inside">
                <div class="column">
                  <img class="img-1" src={"../images/lar.png"} alt="" />
                  <img class="img-2" src={"../images/chiefs.png"} alt="" />
                </div>
                <p>54 - 51</p>
                <text>LAR</text>
                <span>KC</span>
              </div>{" "}
            </div>
          </Link>
          <div class="game-box">
            <div class="inside">
              <div class="column">
                <img class="img-1" src={"../images/eagles.png"} alt="" />
                <img class="img-2" src={"../images/saint.png"} alt="" />
              </div>
              <p>7 - 48</p>
              <text>PHI</text>
              <span>NO</span>
            </div>{" "}
          </div>
          <div class="game-box">
            <div class="inside">
              <div class="column">
                <img class="img-1" src={"../images/viking.png"} alt="" />
                <img class="img-2" src={"../images/bears.png"} alt="" />
              </div>
              <p>25 - 20</p>
              <text>MIN</text>
              <span>CHI</span>
            </div>{" "}
          </div>
          <div class="game-box">
            <div class="inside">
              <div class="column">
                <img class="img-1" src={"../images/broncos.png"} alt="" />
                <img class="img-2" src={"../images/lac.png"} alt="" />
              </div>
              <p>23 - 22</p>
              <text>DEN</text>
              <span>LAC</span>
            </div>{" "}
          </div>
          <div class="game-box">
            <div class="inside">
              <div class="column">
                <img class="img-1" src={"../images/texans.png"} alt="" />
                <img class="img-2" src={"../images/washington.png"} alt="" />
              </div>
              <p>23 - 21</p>
              <text>HOU</text>
              <span>WAS</span>
            </div>{" "}
          </div>
          <div class="game-box">
            <div class="inside">
              <div class="column">
                <img class="img-1" src={"../images/titans.png"} alt="" />
                <img class="img-2" src={"../images/colts.png"} alt="" />
              </div>
              <p>10 - 38</p>
              <text>TEN</text>
              <span>IND</span>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
