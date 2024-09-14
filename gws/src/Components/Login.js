import React, { useState } from 'react';
import './auth.css'; // Styles for the forms

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic, like sending login request to the server
        console.log('Login Details:', { username, password });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <p className="redirect">Don't have an account? <a href="/signup">Sign Up</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
