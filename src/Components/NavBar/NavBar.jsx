import React, { useEffect } from "react";
import "./NavBar.css";
import highlight from "../../Functions/Highlight";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    useEffect(() => {
        highlight();
    })

    return (
        <div className="navBarConteiner">
            <img src={require('../Images/home.png')} alt="homeIcon" className="iconsNavBar" onClick={() => navigate("/home")} />
            <img src={require('../Images/message.png')} alt="messageIcon" className="iconsNavBar" onClick={() => navigate("/forum")} />
            <img src={require('../Images/plus.png')} alt="plusIcon" className="iconsNavBar" onClick={() => navigate("/addplant")} />
            <img src={require('../Images/flower.png')} alt="flowerIcon" className="iconsNavBar" onClick={() => navigate("/myplant")} />
        </div>
    )
}