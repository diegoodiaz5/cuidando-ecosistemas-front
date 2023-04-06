import React from 'react'
import "./UserConfiguration.css"
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import ArrowAndLogo from '../ArrowAndLogo/ArrowAndLogo';

export default function UserConfiguration() {
    const navigate = useNavigate();
    return (
        <>
            <section id='sectionUserConfiguration'>
                <ArrowAndLogo />
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
