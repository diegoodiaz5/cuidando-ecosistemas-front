import React from "react";
import "./Home.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx"

export default function Home() {

    const navigate = useNavigate();
    const [valueInput, setValueInput] = useState('');
    const handleChange = e => {
        setValueInput(e.target.value);
    }
    useEffect(() => {
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
    })
    const clearInput = () => {
        setValueInput('');
    }
    return (
        <>
            {localStorage.token ?
                (
                    <main>
                        <div id="home">
                            <div className="arrowAndAccountBox">
                                <img src={require('../Images/leftArrow.png')} alt="leftArrow" width="11.78px" height="20px" className="leftArrow" onClick={() => navigate("/")} />
                                <img src={require('../Images/userAccountBox.png')} alt="userAccountBox" width="20px" height="20px" className="userAccountBox" />
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