import React from "react";
import "./Home.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx"

export default function Home() {

    const navigate = useNavigate();
    const [valueInput, setValueInput] = useState('');
    const handleChange = e => {
        setValueInput(e.target.value);
    }
    const clearInput = () => {
        setValueInput('');
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("../");
    }

    const getIds = () => {
        const close = document.getElementById("closeButton");
        const inputSearch = document.getElementById("inputSearch");
        const contHome = document.getElementById("containerHome");
        const recents = document.getElementById("recents");
        if (valueInput !== '') {
            close.style.display = "inline";
            inputSearch.style.width = "80%";
            contHome.style.display = "none";
            recents.style.display = "block";
        } else {
            close.style.display = "none";
            inputSearch.style.width = "97%"
            contHome.style.display = "flex";
            recents.style.display = "none";
        };
    }
    return (
        <>
            {localStorage.token ?
                (
                    <main onLoad={getIds}>
                        <div id="home">
                            <div className="AccountBox">
                                <button id="logoutButton" onClick={logout}>Log out</button>
                                <img src={require('../Images/userAccountBox.png')} alt="userAccountBox" className="userAccountBox" onClick={() => navigate("/userProfile")} />
                            </div>
                            <div className="inputConteiner">
                                <input type="text" id="inputSearch" placeholder="Search in Cuidando Ecosistemas" value={valueInput} onChange={handleChange} />
                                <img src={require('../Images/close.png')} alt="closeButton" id="closeButton" onClick={clearInput} />
                            </div>
                            <div id="recents">
                                <h2 id="recentsTitle">Recents</h2>
                            </div>
                            <div id="containerHome">
                                <div className="box">
                                    <img src={require('../Images/clock.png')} alt="clock" width="32px" />
                                    <p className="textInBox">Reminders</p>
                                </div>
                                <div className="box">
                                    <img src={require('../Images/plus.png')} alt="plus" width="32px" />
                                    <p className="textInBox">Identify</p>
                                </div>
                                <div className="box">
                                    <img src={require('../Images/bulblight.png')} alt="bulblight" width="32px" />
                                    <p className="textInBox">Care</p>
                                </div>
                                <img src={require('../Images/logo.png')} alt="logo" />
                            </div>
                        </div>
                        <NavBar />
                    </main>
                ) : window.location.replace("/")
            }
        </>
    )
}