import React from 'react';
import './ConfigurationBox.css';
import { useNavigate } from 'react-router-dom';

export default function ConfigurationBox({ info }) {
    const navigate = useNavigate();
    return (
        <div id='whiteContainerConfig'>
            <h3>Configuration</h3>

            <h2 id='titleConfig'>{info.title}</h2>

            <ul id='listContainer'>
                <li>{info.list.firstItem}</li>
                <li>{info.list.secondItem}</li>
                <li>{info.list.thirdItem}</li>
            </ul>

            <p id='termsParagraph' onClick={() => navigate("../termsandconditions")}>Terms and Conditions</p>
        </div>
    )
}
