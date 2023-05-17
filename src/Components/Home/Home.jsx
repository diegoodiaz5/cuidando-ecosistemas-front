import React from "react";
import "./Home.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx"
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

export default function Home() {

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    let uid;

    const auth = getAuth();
    const getUser = async () => {
        const res = await fetch(`http://localhost:3001/userId/${uid}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        const resJson = await res.json();
        const usernameData = await resJson.information.username;
        const photoData = await resJson.information.photo;
        setUsername(usernameData);
        setUserPhoto(photoData);
        setLoading(true);
    };
    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid;
            getUser();
        }
    });

    const navigate = useNavigate();
    const [valueInput, setValueInput] = useState('');
    const handleChange = e => {
        setValueInput(e.target.value);
        const close = document.getElementById("closeButton");
        const inputSearch = document.getElementById("inputSearch");
        const contHome = document.getElementById("containerHome");
        const recents = document.getElementById("recents");
        if (e.target.value !== '') {
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
    const clearInput = () => {
        setValueInput('');
        const close = document.getElementById("closeButton");
        const inputSearch = document.getElementById("inputSearch");
        const contHome = document.getElementById("containerHome");
        const recents = document.getElementById("recents");
        close.style.display = "none";
        inputSearch.style.width = "97%"
        contHome.style.display = "flex";
        recents.style.display = "none";
    }

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem("token");
            navigate("../");
        }).catch((error) => {
            console.log(error);
        });

    }

    let dropdownMenu = document.getElementById('subUlHome');

    const getIds = () => {
        dropdownMenu = document.getElementById('subUlHome');
    }

    const showDropdownMenu = () => {
        if (dropdownMenu.style.display === "inline") {
            dropdownMenu.style.display = "none"
        } else {
            dropdownMenu.style.display = "inline"
        }
    }

    const users = [];

    const getUsers = async () => {
        const res = await fetch('http://localhost:3001/',
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        const resJson = await res.json();
        await resJson.forEach(element => users.push([element.information.username, element.information.photo]));
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            {loading &&
                (
                    <main onLoad={getIds}>
                        <div id="home">
                            <div className="AccountBox">
                                <div id="usernameAndAccountBox">
                                    <img src={userPhoto} alt="userAccountBox" className="userAccountBox" onClick={() => navigate("/userProfile")} />
                                    <p id="usernameParagraph">{username}</p>
                                </div>
                                <div id="ulHome">
                                    <img src={require('../Images/menu.png')} alt="menuIcon" onClick={showDropdownMenu} />
                                    <div id="subUlHome">
                                        <p className="itemUlHome paragraphBorderBottom">My profile</p>
                                        <p className="itemUlHome paragraphBorderBottom" onClick={() => navigate("/termsandconditions")}>Terms and conditions</p>
                                        <p className="itemUlHome" id="logoutButton" onClick={logout}>Logout</p>
                                    </div>
                                </div>

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
                )
            }
        </>
    )
}