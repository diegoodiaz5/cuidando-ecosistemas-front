import React from 'react'
import './ArrowAndLogo.css'
import { useNavigate } from 'react-router-dom'

export default function ArrowAndLogo() {
    const navigate = useNavigate();
    return (
        <div id='arrowAndLogoContainer'>
            <img id='leftArrowImg' src={require('../Images/leftArrow.png')} alt="leftArrow" onClick={() => navigate(-1)} />
            <img id='logoImg' src={require('../Images/logo.png')} alt="logo" />
        </div>
    )
}
