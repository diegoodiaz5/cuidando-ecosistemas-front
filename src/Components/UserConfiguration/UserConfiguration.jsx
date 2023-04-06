import React from 'react'
import "./UserConfiguration.css"
import NavBar from '../NavBar/NavBar'
import { useNavigate } from "react-router-dom";

export default function UserConfiguration() {

    const navigate = useNavigate();

    return (
        <>
            <section id='sectionUserConfiguration'>
                <div id='firstLineConfiguration'>
                    <img src={require('../Images/leftArrow.png')} alt="leftArrow" id='leftArrowConfiguration' />
                    <img src={require('../Images/logo.png')} alt="logo" />
                </div>
                <section id='whiteContainerConfiguration'>
                    <h3>Configuration</h3>
                    <button className="configButton" onClick={() => navigate('/userconfiguration/myprofile')}>My Profile</button>
                    <button className="configButton" onClick={() => navigate('/help')}>Help</button>
                    <button className="configButton" onClick={() => navigate('/notifications')}>Notifications</button>

                    <p onClick={() => navigate('/termsandconditions')}>Terms and Conditions</p>
                </section>
            </section>
            <NavBar />
        </>
    )
}
