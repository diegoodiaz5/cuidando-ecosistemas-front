import React from 'react'
import "./AddPlant.css"
import NavBar from "../NavBar/NavBar"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function AddPlant() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const auth = getAuth();
    let uid;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid;
        }
    });

    const submit = async (data) => {
        data.uid = uid;
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
            } else {
                navigate('/myplant');
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
                <form onSubmit={handleSubmit(submit)} id="formAddPlant">
                    <label className='labelForm'>Name:
                        <input type="text" className="inputAddPlant" {...register("name", { required: true })} />
                        {errors.name?.type === 'required' && <p className="errorsParagraph">* Name is required!</p>}
                    </label>
                    <label className='labelForm'>Image (url):
                        <input type="text" className="inputAddPlant" {...register("image", { required: true })} />
                        {errors.image?.type === 'required' && <p className="errorsParagraph">* Image is required!</p>}
                    </label>
                    <label className='labelForm'>Health:
                        <textarea type="text" className="inputAddPlant" {...register("health")} />
                    </label>
                    <label className='labelForm'>Information:
                        <textarea type="text" className="inputAddPlant" {...register("information")} />
                    </label>
                    <label className='labelForm'>Recommendation:
                        <textarea type="text" className="inputAddPlant" {...register("recommendation")} />
                    </label>
                    <button type='submit' id="addPlantButton">Add</button>
                </form>
            </div>
            <NavBar />
        </>
    )
}
