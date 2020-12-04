import React from 'react'
import Dropdown from 'react-dropdown';
import { Link } from "react-router-dom";
import 'react-dropdown/style.css';
import './Login.css'

const options = [
    'ESPN', 'CBS Sports', 'Longhorn Network'
];

class Login extends React.Component {
    
    render() {
        return (
            <div class="football-pic">
                <div class="green-overlay">
                    <h1>autoClips</h1>
                    <div class="form">
                        <div class="drop">
                        <Dropdown 
                            controlClassName='dropdown'
                            options={options} 
                            onChange={this._onSelect} 
                            placeholder="Enter Enterprise Name" />
                        </div>
                        
                        <input
                            type="text"
                            placeholder=" Enter Username"
                        />
                        <input
                            type="password"
                            placeholder=" Enter Password"
                        />
                        <div class="b">
                            <Link to='/home'>
                                <button 
                                    class="button"
                                    type="button">
                                        Log in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;