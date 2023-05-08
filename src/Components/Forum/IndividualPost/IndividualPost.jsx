import React from 'react'
import './IndividualPost.css'

export default function IndividualPost({ plant }) {
    return (
        <>
            <div className='photoAndName'><img alt="profilePhoto" /> <p>{plant.name}</p></div>
            <div><img src={plant.image} className='flowerPhoto' alt="flowerPhoto" /></div>
            <input className='commentPostInput' type="text" placeholder='Write a comment' />
        </>
    )
}
