import React from 'react'
import "./Login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const auth = getAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
            .then(() => {
                const user = auth.currentUser;
                localStorage.setItem("token", user.getIdToken);
                window.location.replace("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`${errorCode}, ${errorMessage}`)
                loginFailed();
            });
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
