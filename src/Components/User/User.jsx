import React from "react"
import "./User.css"
export default function User() {

    const showLogIn = () => {
        document.getElementById("firstScreen").style.display = "none";
        document.getElementById("logInScreen").style.display = "flex";
        document.getElementById("registerContainer").style.display = "none";
    }

    const showRegister = () => {
        document.getElementById("logInScreen").style.display = "none";
        document.getElementById("registerContainer").style.display = "flex";
    }

    return (
        <div id="userContainer">
            <div id="firstScreen" onClick={showLogIn}>
                <img src={require('../Images/logo.png')} alt="logo" id="logo" />
                <h3 id="caringText">CUIDANDO</h3>
                <h4 id="ecosystemsText">ECOSISTEMAS</h4>
                <h1 id="hiTitle">¡Hi!</h1>
            </div>
            <div id="logInScreen">
                <img src={require('../Images/logo.png')} alt="logo" id="logo" />
                <h3 id="caringText">CUIDANDO</h3>
                <h4 id="ecosystemsText">ECOSISTEMAS</h4>

                <input type="text" placeholder="User" className="inputUserScreen" id="inputUser" />
                <input type="text" placeholder="Password" className="inputUserScreen" />

                <button className="buttonUserScreen">Sign in</button>
                <button className="buttonUserScreen" onClick={showRegister}>Register</button>

                <button className="buttonSocialNetwork">Sign in with Google</button>
                <button className="buttonSocialNetwork">Sign in with Facebook</button>
                <button className="buttonSocialNetwork">Sign in with ICloud</button>
            </div>
            <div id="registerContainer">
                <img src={require('../Images/leftArrow.png')} alt="arrowBack" onClick={showLogIn} id="arrowBackRegister" />
                <input type="text" placeholder="User" className="inputUserScreen" id="firstInputRegister" />
                <input type="email" placeholder="Email" className="inputUserScreen" />
                <input type="password" placeholder="Password" className="inputUserScreen" />
                <button className="buttonUserScreen" onClick={showLogIn} id="signInButton">Sign In</button>
                <button className="buttonUserScreen">Register</button>
            </div>
        </div >
    )
} 