import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        { name: "KC", q1: "7", q2: "16", q3: "7", q4: "21", tot: "51" },
        { name: "LAR", q1: "13", q2: "10", q3: "17", q4: "14", tot: "54" },
      ],
    };
  }

  renderTableData() {
    return this.state.teams.map((team) => {
      const { name, q1, q2, q3, q4, tot } = team; //destructuring
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{q1}</td>
          <td>{q2}</td>
          <td>{q3}</td>
          <td>{q4}</td>
          <td>{tot}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.teams[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <>
        <div class="top-bar">
          <div class="logo-pic" />
          <div class="account">
            <p>
              Username <span>Affiliation</span>
            </p>
            <img
              class="profile-pic"
              src={"../images/Profile-Icon.png"}
              alt=""
            />
          </div>
        </div>
        <div class="team-1">
          <img src={"../images/chiefs.png"} alt="" />
          <p>Kansas City Chiefs</p>
        </div>
        <div class="week">
          <h2>Week 13 (11/15/2020)</h2>
          <table id="teams">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
        <div class="team-2">
          <img src={"../images/lar.png"} alt="" />
          <p>Los Angeles Rams</p>
        </div>
        <div class="compile">
          <Link to="../videos/highlights.mp4">
            <button type="button">
              Compile <span>Highlights</span>
            </button>
          </Link>
        </div>
        <div class="quarters">
          <p>Quarter 1</p>
          <table class="q-table-1">
            <tr>
              <td>12:00</td>
              <td>Robert Woods (WR) 7 Yd pass from Jared Goff (QB)</td>
              <td>
              <Link to="../videos/touchdown.mp4">
                <img src={"../images/play-button.png"} alt="" />
              </Link>
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>5:35</td>
              <td>Josh Reynolds (WR) 4 Yd pass from Jared Goff (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>3:25</td>
              <td>Tyreek Hill (WR) 25 Yd pass from Patrick Mahomes (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
          </table>
          <p>Quarter 2</p>
          <table class="q-table-2">
            <tr>
              <td>14:54</td>
              <td>Greg Zuerlein (PK) 23 Yd Field Goal</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>8:04</td>
              <td>Harrison Butker (PK) 21 Yd Field Goal</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>6:28</td>
              <td>Kareem Hunt 21 (RB) Yd pass from Patrick Mahomes (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>1:50</td>
              <td>Samson Ebukam (LB) 11 Yd Fumble Return</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>0:13</td>
              <td>Chris Conley (WR) 8 Yd pass from Patrick Mahomes (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
          </table>
          <p>Quarter 3</p>
          <table class="q-table-3">
            <tr>
              <td>10:52</td>
              <td>Jared Goff (QB) 7 Yd Run</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>7:09</td>
              <td>Travis Kelce (TE) 4 Yd pass from Patrick Mahomes (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>2:24</td>
              <td>Greg Zuerlein (PK) 33 Yd Field Goal</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>2:14</td>
              <td>Samson Ebukam (LB) 25 Yd Interception Return</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
          </table>
          <p>Quarter 4</p>
          <table class="q-table-4">
            <tr>
              <td>12:04</td>
              <td>Tyreek Hill (WR) 73 Yd pass from Patrick Mahomes (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>11:07</td>
              <td>Allen Bailey (DE) 2 Yd Fumble Return</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>9:38</td>
              <td>Gerald Everett (TE) 7 Yd pass from Jared Goff (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>2:47</td>
              <td>Chris Conley (WR) 10 Yd pass from Patrick Mahomes (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
            <tr>
              <td>1:49</td>
              <td>Gerald Everett (TE) 40 Yd pass from Jared Goff (QB)</td>
              <td>
                <img src={"../images/play-button.png"} alt="" />
              </td>
              <td>Export</td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default Details;

