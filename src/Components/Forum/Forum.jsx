import React from 'react'
import "./Forum.css"
import NavBar from '../NavBar/NavBar'
import ArrowAndLogo from '../ArrowAndLogo/ArrowAndLogo'

export default function Forum() {
    return (
        <section id='forum'>
            <div id='subConteinerForum'>
                <ArrowAndLogo />
                <div id='titleForum'>Forum</div>
                <div id='shareExperience'>Share your experience here</div>
            </div>
            <NavBar />
        </section>
    )
}
