import React from "react"
import "./User.css"
import { useNavigate } from "react-router-dom";
export default function User() {
    const navigate=useNavigate( console.log("ola"))
    return (
        <main onClick={()=>navigate(+1)}>
            <div id="user_main_container" >
                <div id="logo_front_container">
         
                <div id="logo_contain">

            <img  src={require('../Images/logo.png')} alt="logo.png" id="logo"  />
                </div>
            <div id="title_contain">
            <h3>CARING </h3>
            <h4>FOR</h4>
            <h5>ECOSYSTEMS</h5>
            </div>
            </div>
            </div>
            <div id="hi_container">
            <h1>¡Hi!</h1>
            </div>
        </main>
    )
}