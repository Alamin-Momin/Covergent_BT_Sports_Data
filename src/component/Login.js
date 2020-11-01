import React from 'react'
import './Login.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'one', 'two', 'three'
];

class Login extends React.Component {
    
    render() {
        return (
            <div class="football">
                <div class="green-overlay">
                    <h1>autoClips</h1>
                    <div class="form">
                        <Dropdown 
                            class="dropdown"
                            options={options} 
                            onChange={this._onSelect} 
                            placeholder="Enter Enterprise Name" />
                        <input
                            type="text"
                            placeholder="Enter Username"
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                        />
                        <button type="button">Log in</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Login;