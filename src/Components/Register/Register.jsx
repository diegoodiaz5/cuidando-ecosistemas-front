import React, { useState } from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register({ showLogin }) {

    const auth = getAuth();
    const navigate = useNavigate();
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [userName, setUserName] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = userName;

        createUserWithEmailAndPassword(auth, emailLogin, passwordLogin)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const uid = user.uid;
                await fetch('http://localhost:3001/register', {
                    method: "POST",
                    body: JSON.stringify({
                        username: username,
                        uid: uid,
                        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const token = user.stsTokenManager.accessToken;
                localStorage.setItem("token", token);
                navigate("/home");
            })
            .catch((error) => {
                registerFailed();
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div id="registerContainer">
            <img src={require('../Images/leftArrow.png')} alt="arrowBack" onClick={showLogin} id="arrowBackRegister" />
            <form onSubmit={handleSubmit} id="registerForm">
                <input type="text" placeholder='Username' className='inputUserScreen' id='inputUsernameReg' onChange={(e) => setUserName(e.target.value)} />
                <input type="email" placeholder="Email" className="inputUserScreen" id="inputUserReg" onChange={(e) => setEmailLogin(e.target.value)} />
                <input type="password" placeholder="Password" className="inputUserScreen" id="inputPWReg" onChange={(e) => setPasswordLogin(e.target.value)} />
                <button className="buttonUserScreen" type="submit">Register</button>
            </form>
            <button className="buttonUserScreen" onClick={showLogin} id="signInButton">Sign In</button>


        </div>
    )

}