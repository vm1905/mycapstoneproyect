import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";


import './LoginForm.css';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setUsername(newUsername);
        if (newUsername.trim() === '') {
            setUsernameError('Please, enter your username');
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (newPassword.length < 8 || newPassword.length > 20) {
            setPasswordError('Password must be between 8 and 20 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ username, password });
        navigate("/welcome", { state: { username } });

        // Reset the form after submission
        setUsername('');
        setPassword('');
    };

    // Validation logic
    const isFormValid = username.trim() !== '' && password.trim() !== '';

    return (
        <>
             <section className="login-section">
                <h2 className="greeting-heading">Welcome, Guest!</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <div className={usernameError ? 'error-input' : ''}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                        {usernameError && <p className="error"><MdErrorOutline className="error-icon" />{usernameError}</p>}
                    </div>
                    <div className={passwordError ? 'error-input' : ''}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        {passwordError && <p className="error"><MdErrorOutline className="error-icon" />{passwordError}</p>}
                    </div>
                    <div className="booking-button">
                        <button 
                            type="submit" 
                            className="button" 
                            aria-label="Login" 
                            disabled={!isFormValid}
                        >Login</button>
                    </div>
                    </fieldset>
                </form>
            </section>
        </>
    );
}

export default LoginForm;
