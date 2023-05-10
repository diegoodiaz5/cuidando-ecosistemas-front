import React from 'react'
import "./Login.css"
import { useState } from 'react';

export default function Login({ showRegister }) {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const loginFailed = () => {
        const inputUser = document.getElementById("inputUser");
        const PWUser = document.getElementById("pwUser");
        setEmailLogin('');
        setPasswordLogin('');
        inputUser.value = '';
        PWUser.value = '';
        PWUser.style.backgroundColor = "#f08080"
        inputUser.style.backgroundColor = "#f08080";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: emailLogin,
                    password: passwordLogin
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const resJson = await res.json();
            const token = resJson.stsTokenManager.accessToken;
            localStorage.setItem("token", token);
            window.location.replace("/home")
        } catch (error) {
            loginFailed();
            console.log(error);
        }
    };


    return (
        <div id="logInScreen">
            <img src={require('../Images/logo.png')} alt="logo" id="logo" />
            <h3 id="caringText">CUIDANDO</h3>
            <h4 id="ecosystemsText">ECOSISTEMAS</h4>
            <form id="loginForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" className="inputUserScreen" name='user' id="inputUser" onChange={(e) => setEmailLogin(e.target.value)} />
                <input type="password" placeholder="Password" className="inputUserScreen" name='password' id="pwUser" onChange={(e) => setPasswordLogin(e.target.value)} />
                <button className="buttonUserScreen" type="submit">Sign in</button>
            </form>
            <button className="buttonUserScreen" onClick={showRegister}>Register</button>
            <button className="buttonSocialNetwork">Sign in with Google</button>
            <button className="buttonSocialNetwork">Sign in with Facebook</button>
            <button className="buttonSocialNetwork">Sign in with ICloud</button>
        </div>
    )
}
