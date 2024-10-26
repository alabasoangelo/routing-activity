import './login.css';
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const users = [
        { username: 'john', password: '123456' },
        { username: 'mary', password: '456' }
    ];
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        if (user) {
            onLogin(); // Call the onLogin prop to change the state in the parent
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <form onSubmit={validateLogin} className="login-form">
            <h2>Login</h2>
            <div>
                <label className='loginTxt'>Username</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="login-input"/>
            </div>
            <div>
                <label className='loginTxt'>Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input"/>
            </div>
            <button className='loginBtn' type="submit">Submit</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default Login;