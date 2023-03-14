import React from "react";
import "./Home.css"

export default function Home() {
    return (
        <div id="home">
            <div className="arrowAndAccountBox">
                <img src={require('../Images/leftArrow.png')} alt="leftArrow" width="11.78px" height="20px" className="leftArrow"/>
                <img src={require('../Images/userAccountBox.png')} alt="userAccountBox" width="20px" height="20px" className="userAccountBox"/>
            </div>
            <input type="text" className="inputSearch" placeholder="Search..."/>
            <div className="container">
                <div className="box">
                    <img src={require('../Images/clock.png')} alt="clock" width="32px"/>
                    <p className="textInBox">Reminders</p>
                </div>
                <div className="box">
                    <img src={require('../Images/plus.png')} alt="plus" width="32px"/>
                    <p className="textInBox">Identify</p>
                </div>
                <div className="box">
                    <img src={require('../Images/bulblight.png')} alt="bulblight" width="32px"/>
                    <p className="textInBox">Care</p>
                </div>
                <img src={require('../Images/logo.png')} alt="logo"/>
            </div>
        </div>
    )
}