import React from "react";
import "./NavBar.css";

export default function NavBar() {
    return(
        <div className="navBarConteiner">
            <img src={require('../Images/home.png')} alt="homeIcon" className="iconsNavBar"/>
            <img src={require('../Images/message.png')} alt="messageIcon" className="iconsNavBar"/>
            <img src={require('../Images/plus.png')} alt="plusIcon" className="iconsNavBar"/>
            <img src={require('../Images/flower.png')} alt="flowerIcon" className="iconsNavBar"/>
        </div>
    )
}