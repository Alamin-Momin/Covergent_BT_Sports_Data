import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        { name: "DAL", q1: "14", q2: "3", q3: "10", q4: "10", tot: "37" },
        { name: "SEA", q1: "7", q2: "0", q3: "7", q4: "7", tot: "21" },
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
            <p>Username</p>
            <p>Affliation</p>
            <div class="profile-pic" />
          </div>
        </div>
        <div class="team-1">
          <img src={require("../images/dallas-cowboys.png")} alt=''/>
          <p>Dallas Cowboys</p>
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
          <img src={require("../images/seattle-seahawks.png")} alt=''/>
          <p>Seattle Seahawks</p>
        </div>
        <div class="compile">
          <Link to="/">
            <button type="button">
              Compile <span>Highlights</span>
            </button>
          </Link>
        </div>
        <div class="quarters">
          <p>Quarter 1</p>
            
          <p>Quarter 2</p>
          <p>Quarter 3</p>
          <p>Quarter 4</p>
        </div>
      </>
    );
  }
}

export default Details;
