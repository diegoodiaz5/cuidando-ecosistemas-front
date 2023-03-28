import React, { useState } from 'react'
import "./Register.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register({ showLogin }) {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const registerFailed = () => {
        const inpUser = document.getElementById("inputUserReg");
        const inpPWReg = document.getElementById("inputPWReg");
        setEmailLogin('');
        setPasswordLogin('');
        inpUser.value = '';
        inpPWReg.value = '';
        inpUser.style.backgroundColor = "#f08080";
        inpPWReg.style.backgroundColor = "#f08080";
    }

    const auth = getAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailLogin, passwordLogin)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`Welcome ${user.email}`)
                localStorage.setItem("token", user.getIdToken);
                window.location.replace("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                registerFailed();
                console.log(`${errorCode}, ${errorMessage}`)
            });
    }

    return (
        <div id="registerContainer">
            <img src={require('../Images/leftArrow.png')} alt="arrowBack" onClick={showLogin} id="arrowBackRegister" />
            <form onSubmit={handleSubmit} id="registerForm">

                <input type="email" placeholder="Email" className="inputUserScreen" id="inputUserReg" onChange={(e) => setEmailLogin(e.target.value)} />
                <input type="password" placeholder="Password" className="inputUserScreen" id="inputPWReg" onChange={(e) => setPasswordLogin(e.target.value)} />
                <button className="buttonUserScreen" onClick={showLogin} id="signInButton">Sign In</button>
                <button className="buttonUserScreen" type="submit">Register</button>
            </form>
        </div>
    )
}
