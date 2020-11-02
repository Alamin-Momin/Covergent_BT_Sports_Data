import React from 'react'
import Dropdown from 'react-dropdown';
import HomeScreen from './Home';
import 'react-dropdown/style.css';
import './Login.css'

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
                            <button 
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location={HomeScreen};
                                    }}>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;