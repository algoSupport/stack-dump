import React from 'react';
import LoginForm from './LoginForm/LoginForm';

function Login() {
    return (
        <div className="login-container">
            <img src="http://localhost:3000/images/login-logo.png" height="150px" style={{ paddingBottom: '2vh' }} alt="" />
            <LoginForm />
        </div>
    )
}

export default Login;