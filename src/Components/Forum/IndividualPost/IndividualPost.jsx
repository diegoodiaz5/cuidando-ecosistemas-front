import React from 'react'
import './IndividualPost.css'

export default function IndividualPost({ plant }) {

    return (
        <div className='conteinerIndividualPost'>
            <div className='photoAndName'>
                <img alt="profilePhoto" src={plant.authorPhoto} className='profilePhotoForum' />
                <p className='userNameInPostForum'>{plant.authorUsername}</p>
            </div>

            <img src={plant.image} className='flowerPhoto' alt="flowerPhoto" />
            <div className='conteinerInputComments'>
                <input className='commentPostInput' type="text" placeholder='Write a comment...' />
                <img src={require('../../Images/send.png')} alt='sendIcon' className='sendImage' />
            </div>
        </div>
    )
}
