import React from 'react'
import "./AddPlant.css"
import NavBar from "../NavBar/NavBar"
import { useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function AddPlant() {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [health, setHealth] = useState('');
    const [information, setInformation] = useState('');
    const [recomendation, setRecomendation] = useState('');

    const auth = getAuth();

    let uid;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid;
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            image: image,
            health: health,
            information: information,
            recomendation: recomendation,
            uid: uid
        };
        try {
            const res = await fetch('http://localhost:3001/newPlant', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                throw new Error("Error en el servidor");
            }
        } catch (error) {
            console.log("No se pudo conectar con el backend");
        }
    };

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
