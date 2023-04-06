import React from 'react'
import './MyProfile.css'
import ArrowAndLogo from '../../ArrowAndLogo/ArrowAndLogo'
import NavBar from '../../NavBar/NavBar'
import ConfigurationBox from '../ConfigurationBox/ConfigurationBox'

export default function MyProfile() {
    const info = {
        title: 'My Profile',
        list: {
            firstItem: 'Profile picture',
            secondItem: 'Username',
            thirdItem: 'Description'
        }
    }
    return (
        <>
            <div className='ContainerConfigs'>
                <ArrowAndLogo />
                <ConfigurationBox info={info} />
            </div>
            <NavBar />
        </>
    )
}
