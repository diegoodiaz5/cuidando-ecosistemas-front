import React from 'react'
import "./IndividualPlant.css"

export default function IndividualPlant({ plant }) {
    return (
        <div className='plantContainer'>
            <img className='plantImage' src={plant.image} alt='plantImage' />
        </div>
    )
}
