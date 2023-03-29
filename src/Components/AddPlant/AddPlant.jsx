import React from 'react'
import "./AddPlant.css"
import NavBar from "../NavBar/NavBar"
import { useState } from 'react'

export default function AddPlant() {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [health, setHealth] = useState('');
    const [information, setInformation] = useState('');
    const [recomendation, setRecomendation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div id="containerAddPlant">
                <div>
                    <h2 id="titleAddPlant">Add a plant!</h2>
                    <img src={require('../Images/plant.png')} alt="iconPlant" id="iconPlant" />
                </div>
                <form action="" onSubmit={handleSubmit} id="formAddPlant">
                    <label>Name:
                        <input type="text" className="inputAddPlant" onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label htmlFor="">Image (url):
                        <input type="text" className="inputAddPlant" onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <label htmlFor="">Health:
                        <textarea type="text" className="inputAddPlant" onChange={(e) => setHealth(e.target.value)} />
                    </label>
                    <label htmlFor="">Information:
                        <textarea type="text" className="inputAddPlant" onChange={(e) => setInformation(e.target.value)} />
                    </label>
                    <label htmlFor="">Recomendation:
                        <textarea type="text" className="inputAddPlant" onChange={(e) => setRecomendation(e.target.value)} />
                    </label>

                    <button type='submit' id="addPlantButton">Add!</button>
                </form>
            </div>
            <NavBar />
        </>
    )
}
