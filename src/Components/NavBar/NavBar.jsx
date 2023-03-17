import React, { useEffect } from "react";
import "./NavBar.css";
import highlight from "../../Functions/Highlight";

export default function NavBar() {
    useEffect(() => {
       highlight();
    }) 

    return(
        <div className="navBarConteiner">
            <img src={require('../Images/home.png')} alt="homeIcon" className="iconsNavBar"/>
            <img src={require('../Images/message.png')} alt="messageIcon" className="iconsNavBar"/>
            <img src={require('../Images/plus.png')} alt="plusIcon" className="iconsNavBar"/>
            <img src={require('../Images/flower.png')} alt="flowerIcon" className="iconsNavBar"/>
        </div>
    )
}